import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  date: String,
  canceled_at: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Appointment", schema);
