import Book from "../models/borrowBooks.js";

const findBorrowBook = async (req, res, next) => {
  const { name, gmail } = req.body;

  try {
    const book = await Book.find({ name: name, borrowdPersonGmail: gmail });

    res.status(200).json(book);
    // console.log(book.length)
  } catch (err) {
    next(err);
  }
};

export default findBorrowBook;
