import Book from "../models/book.js";

const getBookById = async (req, res, next) => {
  const { id } = req.body;

  try {
    const book = await Book.findById(id);
    if(!book){
      const error = new Error("Book not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export default getBookById;
