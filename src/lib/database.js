import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://brunorossini:Bero2401@bmfit.mjzif.mongodb.net/bmfit?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

export default mongoose;
