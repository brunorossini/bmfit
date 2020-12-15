import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  provider: Boolean,
});

schema.pre("save", async function (next) {
  const { password } = this;

  this.password = await bcrypt.hash(password, 8);
  next();
});

schema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", schema);
