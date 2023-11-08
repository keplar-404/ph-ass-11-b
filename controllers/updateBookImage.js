import Book from "../models/book.js";

 const updateImageLink = async (req, res, next) => {
  const { img, id } = req.body;

  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { images: img },
    { new: true }
  );

  res.status(201).json(updatedBook);
};

export default updateImageLink