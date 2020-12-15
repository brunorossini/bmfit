import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const schema = new Schema({
  name: String,
  email: {
    type: Schema.Types.String,
    unique: true,
  },
  password: String,
  phone: String,
  provider: {
    type: Schema.Types.Boolean,
    default: false,
  },
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
