/* GET 'home' page */
const homelist = function (req, res) {
  res.render("index", {
    title: "Quotist: Discover Literary Wisdom Through Quotes",
    pageHeader: {
      title: "Quotist",
      strapline: "Where Literary Words of Wisdom Live",
    },
    books: [
      {
        name: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        rating: 4.5,
        genre: "Literary Science Fiction",
        themes: [
          "Artificial Intelligence",
          "Humanity",
          "Love",
          "Consciousness",
        ],
        published: 2021,
        description:
          "A luminous tale of an artificial friend, who watches the world from her place in the store and remains hopeful that a customer will choose her. A masterful exploration of what it means to love and be human.",
        pages: 303,
      },
      {
        name: "On Earth We're Briefly Gorgeous",
        author: "Ocean Vuong",
        rating: 4.8,
        genre: "Literary Fiction",
        themes: ["Identity", "Family", "Immigration", "Love"],
        published: 2019,
        description:
          "A stunning portrait written as a letter from a son to a mother who cannot read, exploring family history, race, class, and the intersection of personal and cultural identity.",
        pages: 246,
      },
      {
        name: "Normal People",
        author: "Sally Rooney",
        rating: 4.3,
        genre: "Contemporary Fiction",
        themes: ["Relationships", "Class", "Coming of Age", "Modern Love"],
        published: 2018,
        description:
          "A complex love story that follows two people who weave in and out of each other's lives, exploring intimacy, class differences, and mental health in the modern world.",
        pages: 266,
      },
    ],
    sidebar: {
      mainText:
        "Quotist celebrates the power of words that move us. We collect and share the most impactful quotes from contemporary literature.",
      quickTips: [
        "Explore memorable quotes from modern books",
        "Discover wisdom in contemporary literature",
        "Find inspiration in authors' words",
      ],
    },
  });
};

/* GET 'Book info' page */
const bookInfo = function (req, res) {
  res.render("book-info", {
    title: "Quotist: Book Details",
    pageHeader: {
      title: "Book Details",
      strapline: "Discover the Words That Matter",
    },
    book: {
      name: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      rating: 4.5,
      genre: "Literary Science Fiction",
      themes: ["Artificial Intelligence", "Humanity", "Love", "Consciousness"],
      published: 2021,
      description:
        "A luminous tale of an artificial friend, who watches the world from her place in the store and remains hopeful that a customer will choose her. A masterful exploration of what it means to love and be human.",
      pages: 303,
    },
    quotes: [
      {
        text: "There was something specific in the sun's pattern of movement that troubled me, that made me want to know more.",
        book: "bookId_will_be_here", // Here should be an ObjectId but it's hardcoded for now
      },
      {
        text: "Perhaps all humans are like that. Perhaps none of us really knows what we feel.",
        book: "bookId_will_be_here",
      },
      {
        text: "Until recently, I didn't think that humans could choose loneliness. That there were sometimes forces more powerful than the wish to avoid loneliness.",
        book: "bookId_will_be_here",
      },
    ],
    sidebar: {
      mainText:
        "Quotist helps you discover and remember the words that touch your soul.",
      callToAction:
        "Explore memorable quotes that capture the essence of this book.",
    },
  });
};

module.exports = {
  homelist,
  bookInfo,
};
