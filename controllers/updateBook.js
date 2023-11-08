import Book from "../models/book.js";

const updateBook = async (req, res, next) => {
  const { id, name, authorName, category, rating } = req.body;
  const lowercaseName = name.toLowerCase();
  const lowerCaseAuthorName = authorName.toLowerCase();
  const lowercaseCategory = category.toLowerCase();

  try {
    // check if book exits
    const book = await Book.findById(id);
    if (!book) {
      const error = new Error("Book not found");
      error.statusCode = 404;
      throw error;
    }
    // if book exits than update
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        name: lowercaseName,
        authorName: lowerCaseAuthorName,
        category: lowercaseCategory,
        rating,
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    next(err);
  }
};

export default updateBook;
