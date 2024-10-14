/* GET 'home' page */
const homelist = function (req, res) {
  res.render("books-list", { title: "Home" });
};
/* GET 'Book info' page */
const bookInfo = function (req, res) {
  res.render("book-info", { title: "Book info" });
};
/* GET 'Add review' page */
const addReview = function (req, res) {
  res.render("book-review-form", { title: "Add review" });
};

module.exports = {
  homelist,
  bookInfo,
  addReview,
};
