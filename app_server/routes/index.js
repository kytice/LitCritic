const express = require("express");
const router = express.Router();
const ctrlBooks = require("../controllers/books");
const ctrlAuth = require("../controllers/auth");

/* Book pages */
router.get("/", ctrlBooks.homelist);
router.get("/book", ctrlBooks.bookInfo);

/* Authentication */
router.get("/login", ctrlAuth.login);
router.get("/register", ctrlAuth.register);

module.exports = router;
