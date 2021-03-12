import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  street: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  zip: String,
  complement: String,
  reference: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Address", schema);
