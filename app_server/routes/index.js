const express = require("express");
const router = express.Router();
const ctrlBooks = require("../controllers/books");
const authRoutes = require("./auth");

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get("/", ctrlBooks.homelist);
router.get("/book/:bookid", ctrlBooks.bookInfo);
router.use("/", authRoutes);

module.exports = router;
