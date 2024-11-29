const request = require("request");

const apiOptions = {
  server: "http://localhost:3000",
};

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://quotist.onrender.com";
}

const _renderHomepage = function (req, res, responseBody) {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No books found";
    }
  }

  res.render("index", {
    title: "Quotist · Home",
    pageHeader: {
      title: "Quotist",
      strapline: "Find your next favorite quote",
    },
    sidebar: {
      mainText:
        "Quotist helps you discover and save meaningful quotes from your favorite books.",
      tips: [
        "Click on a book to see its quotes",
        "Save your favorite quotes to your profile",
        "Share quotes with your friends",
        "Discover new books through meaningful quotes",
      ],
    },
    books: responseBody,
    message: message,
  });
};

/* GET 'home' page */
const homelist = function (req, res) {
  const path = "/api/books";
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
  };

  request(requestOptions, (err, response, body) => {
    let data = [];
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      data = body;
    } else {
      console.log(response.statusCode);
    }
    _renderHomepage(req, res, data);
  });
};

/* GET 'Book info' page */
const bookInfo = function (req, res) {
  const path = `/api/books/${req.params.bookid}`;
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
  };

  request(requestOptions, (err, response, body) => {
    let book = {};
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      book = body;
    } else {
      console.log(response.statusCode);
    }

    res.render("book-info", {
      title: `Quotist · ${book.name}`,
      pageHeader: {
        title: "Book Details",
        strapline: "Discover the Words That Matter",
      },
      book: book,
      quotes: book.quotes || [],
      sidebar: {
        mainText:
          "Every book has lines that stay with you forever. Let's find yours.",
        callToAction:
          "Explore memorable quotes that capture the essence of this book.",
      },
    });
  });
};

module.exports = {
  homelist,
  bookInfo,
};
