import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: { type: String, default: "" },
  quantity: { type: Number, required: true },
  authorName: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  rating: { type: Array, default: [1] },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
