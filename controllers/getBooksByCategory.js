import Book from "../models/book.js";

const getBooksByCategory = async (req, res, next) => {
  const { category } = req.body;

  try {
    const lowercaseCategory = category.toLowerCase();
    const books = await Book.find({ category: lowercaseCategory });
    if (books.length === 0) {
      const error = new Error("No Books found");
      error.statusCode = 400;
      throw error;
    }
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export default getBooksByCategory;
