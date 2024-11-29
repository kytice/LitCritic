const mongoose = require("mongoose");
const Book = mongoose.model("Book");
const Quote = mongoose.model("Quote");

// Get all books
const booksList = async function (req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error fetching books",
      error: err.message,
    });
  }
};

// Get one book by ID
const booksReadOne = async function (req, res) {
  try {
    const book = await Book.findById(req.params.bookid);
    if (!book) {
      return res.status(404).json({
        status: "error",
        message: "Book not found",
      });
    }
    // Get quotes for this book
    const quotes = await Quote.find({ book: req.params.bookid });

    // Combine book and quotes
    const bookData = book.toObject();
    bookData.quotes = quotes;

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error finding book",
      error: err.message,
    });
  }
};

module.exports = {
  booksList,
  booksReadOne,
};
