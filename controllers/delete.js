import Book from "../models/book.js";

const deleteBook = async (req, res, next) => {
  const { id } = req.body;

  try {
    // check if book exits
    const book = await Book.findById(id);
    if (!book) {
      const error = new Error("Book not found");
      error.statusCode = 404;
      throw error;
    }
    // if book exits than delete
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    next(err);
  }
};

export default deleteBook;
