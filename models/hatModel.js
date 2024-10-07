import mongoose, { model } from "mongoose";

const HatSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "please add the model name"],
    unique: [true, "hat already exists"],
    trim: true,
  },
  size: {
    type: String,
    required: [true, "please enter the hat size"],
    max: [30, " the max size is 30"],
  },
  color: {
    type: String,
    required: [true, "please enter  a color "],
  },
});

export default mongoose.model("Hat", HatSchema);
