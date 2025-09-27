import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  subscriptionStatus: { type: String, default: "free" }, // free / active
  isAdmin: { type: Boolean, default: false }, // ✅ new
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);   
