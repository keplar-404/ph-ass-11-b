import BorrowedBook from "../models/borrowBooks.js";

const getAllBorrowedBooks = async (req, res, next) => {
  try {
    const books = await BorrowedBook.find();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export default getAllBorrowedBooks;
