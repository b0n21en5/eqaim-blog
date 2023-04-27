import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blogBody: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
  },
});

export default mongoose.model("blogs", blogSchema);
