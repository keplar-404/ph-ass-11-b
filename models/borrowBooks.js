import mongoose from "mongoose";

const borrowedBookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [String],
  authorName: { type: String },
  borrowdPersonName: String,
  borrowdPersonGmail: String,
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  rating: [Number],
  borrowedDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
});

const BorrowedBook = mongoose.model("BorrowedBook", borrowedBookSchema);
export default BorrowedBook;
