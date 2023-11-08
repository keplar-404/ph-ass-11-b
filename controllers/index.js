import { home } from "./homeController.js";
import addBook from "./addBook.js";
import getAllBooks from "./getAllBooks.js";
import getBooksByCategory from "./getBooksByCategory.js";
import getBookById from "./getBookById.js";
import deleteBook from "./delete.js";
import updateBook from "./updateBook.js";
import updateImageLink from "./updateBookImage.js";
import borrowedBook from "./borrowBook.js";
import jwt from "./generateJwt.js"
import findBorrowBook from "./findBorrowBook.js";
import getAllBorrowedBooks from "./getAllBorrowBooks.js";
import returnBook from "./returnBook.js";

const allControllers = {
  home,
  getAllBooks,
  getBooksByCategory, 
  getBookById,
  addBook,
  deleteBook,
  updateBook,
  updateImageLink,
  borrowedBook,
  jwt,
  findBorrowBook,
  getAllBorrowedBooks,
  returnBook
};

export default allControllers;
