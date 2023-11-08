import Book from "../models/book.js";
import BorrowedBook from "../models/borrowBooks.js";

const borrowedBook = async (req, res, next) => {
  const { id, personName, personGmail, returnDate } = req.body;

  const lowerCaseGmail = personGmail.toLowerCase();
  const lowerCasePersonName = personName.toLowerCase();

  try {
    // Find the book
    const book = await Book.findById(id);

    if (!book) {
      const error = new Error("Book not found");
      error.statusCode = 404;
      throw error;
    }

    // Check quantities of the book
    if (book.quantity <= 0) {
      const error = new Error("Stock out");
      error.statusCode = 400;
      throw error;
    }

    // Check user has already borrowed this book
    const existingBorrowedBook = await BorrowedBook.findOne({
      name: book.name,
      borrowdPersonGmail: lowerCaseGmail,
    });

    if (existingBorrowedBook) {
      const error = new Error("You had already borrowed this book");
      error.statusCode = 400;
      throw error;
    }

    // Create borrowed book
    const borrowedBook = new BorrowedBook({
      name: book.name,
      images: book.images,
      authorName: book.authorName,
      borrowdPersonGmail: lowerCaseGmail,
      borrowdPersonName: lowerCasePersonName,
      category: book.category,
      shortDescription: book.shortDescription,
      rating: book.rating,
      returnDate: returnDate,
    });
    const savedBorrowedBook = await borrowedBook.save();

    // Update quantity of the original book
    book.quantity -= 1;
    await book.save();

    res.status(201).json(savedBorrowedBook);
  } catch (err) {
    next(err);
  }
};

export default borrowedBook;
