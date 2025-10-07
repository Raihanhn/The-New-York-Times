import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
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
    async signIn({ user, profile }) {
      try {
        await dbConnect();

        const googleId = profile?.sub;
        if (!googleId) return false;

        let existingUser = await User.findOne({ googleId });

        if (!existingUser) {
          existingUser = await User.findOne({ email: user.email });
          if (existingUser) {
            existingUser.googleId = googleId;
            await existingUser.save();
          } else {
            existingUser = await User.create({
              name: user.name,
              email: user.email,
              image: user.image,
              googleId,
              subscriptionStatus: "free",
              isAdmin: false, // default
            });
          }
        }

        user.id = existingUser._id.toString();
        user.isAdmin = existingUser.isAdmin;

        return true;
      } catch (err) {
        console.error("Error in signIn callback:", err);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
};

export default NextAuth(authOptions);
