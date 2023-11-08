import Book from "../models/book.js";
import BorrowedBook from "../models/borrowBooks.js";

const returnBook = async (req, res, next) => {
  const { id, name } = req.body;

  try {
    const book = await Book.findOne({ name: name });
    await BorrowedBook.findByIdAndDelete(id);
    book.quantity += 1;
    await book.save();
    res.status(201).json("operation successfull");
  } catch (err) {
    next(err);
  }
};

export default returnBook