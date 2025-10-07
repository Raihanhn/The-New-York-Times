// app/admin/page.jsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import AdminPanel from "./AdminPanel";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Not logged in → redirect to sign in
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  await dbConnect();
  const user = await User.findById(session.user.id).lean();

  // Not admin → redirect to home
  if (!user?.isAdmin) {
    redirect("/");
  }

  return <AdminPanel />;
}
