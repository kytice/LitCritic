const express = require("express");
const router = express.Router();
const ctrlBooks = require("../controllers/books");
const authRoutes = require("./auth");

// books
router.route("/books").get(ctrlBooks.booksList);
router.route("/books/:bookid").get(ctrlBooks.booksReadOne);

// auth
router.use("/", authRoutes);

module.exports = router;
