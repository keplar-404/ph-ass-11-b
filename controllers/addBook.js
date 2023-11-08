import Book from "../models/book.js";

const addBook = async (req, res, next) => {
  const {
    name,
    quantity,
    authorName,
    category,
    shortDescription,
    rating,
  } = req.body;

  try {
    // Convert the name to lowercase
    const lowercaseName = name.toLowerCase();
    const lowerCaseAuthorName = authorName.toLowerCase();
    const lowercaseCategory = category.toLowerCase();

    // Check if book name exits
    const existingBook = await Book.findOne({ name: lowercaseName });
    if (existingBook) {
      const error = new Error("A book with the same name already exists.");
      error.statusCode = 400;
      throw error;
    }

    // Create a new book
    const newBook = new Book({
      name: lowercaseName,
      quantity,
      authorName: lowerCaseAuthorName,
      category: lowercaseCategory,
      shortDescription,
      rating,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    next(err);
  }
};

export default addBook;
