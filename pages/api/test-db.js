// pages/api/test-db.js
import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: "MongoDB Connected ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
