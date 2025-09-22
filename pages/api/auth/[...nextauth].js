import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await dbConnect();
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        await User.create({ name: user.name, email: user.email, image: user.image });
      }
      return true;
    },
    async session({ session }) {
      await dbConnect();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.subscriptionActive = dbUser.subscriptionActive;
      session.user.subscriptionTier = dbUser.subscriptionTier;
      return session;
    },
  },
});
