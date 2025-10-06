import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account", // force account chooser
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await dbConnect();

        // Use googleId from profile
        const googleId = profile?.sub || null;

        if (!googleId) {
          console.error("Google profile ID missing!");
          return false;
        }

        // Check if user already exists with this googleId
        let existingUser = await User.findOne({ googleId });

        if (!existingUser) {
          // Create new user
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            googleId: googleId,
            subscriptionStatus: "free",
          });
        }

        // Attach user id to token in JWT callback
        user.id = existingUser._id.toString();

        return true;
      } catch (err) {
        console.error("Error in signIn callback:", err);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
