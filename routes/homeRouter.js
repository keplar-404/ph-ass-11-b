import express from "express"
import allControllers from "../controllers/index.js"
import verifyJwt from "../middleware/validateJwt.js"

const router = express.Router()
const { home, addBook, getAllBooks, getBooksByCategory, getBookById, deleteBook, updateBook, borrowedBook, updateImageLink, jwt, findBorrowBook, getAllBorrowedBooks, returnBook } = allControllers


//all router operation
router.get('/', home)

// router for getting data
router.get('/getall', getAllBooks)
router.get('/getallb', getAllBorrowedBooks)
router.post('/getbycategory', getBooksByCategory)
router.post('/getbyid', getBookById)

// router for adding data 
router.post('/add', verifyJwt, addBook)
router.put('/updateimg', updateImageLink)
router.post('/borrow', borrowedBook)
router.post('/findBorrow', findBorrowBook)

// router for other function
router.put('/update', updateBook)
router.delete('/delete', deleteBook)
router.post('/return', returnBook)

// router for jwt
router.post('/jwt', jwt)


export default router