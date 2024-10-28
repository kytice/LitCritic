/* GET 'home' page */
const homelist = function (req, res) {
  res.render("index", {
    title: "Quotist · Literary Quotes",
    pageHeader: {
      title: "Quotist",
      strapline: "Where Literary Words of Wisdom Live",
    },
    books: [
      {
        name: "Demon Copperhead",
        author: "Barbara Kingsolver",
        rating: 4.49,
        genre: "Literary Fiction",
        themes: [
          "Rural America",
          "Drug Addiction",
          "Foster Care",
          "Poverty",
          "Coming of Age",
          "Survival",
        ],
        published: 2022,
        description:
          "Set in the mountains of southern Appalachia, this is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father's good looks and copper-colored hair, a caustic wit, and a fierce talent for survival. In a plot that never pauses for breath, relayed in his own unsparing voice, he braves the modern perils of foster care, child labor, derelict schools, athletic success, addiction, disastrous loves, and crushing losses. Through all of it, he reckons with his own invisibility in a popular culture where even the superheroes have abandoned rural people in favor of cities.",
        pages: 560,
      },
      {
        name: "Blue Sisters",
        author: "Coco Mellors",
        rating: 4.11,
        genre: "Literary Fiction",
        themes: [
          "Sisterhood",
          "Grief",
          "Addiction Recovery",
          "Family Home",
          "Identity",
          "Urban Life",
        ],
        published: 2024,
        description:
          "The three Blue sisters are exceptional—and exceptionally different. Avery, the eldest and a recovering heroin addict turned strait-laced lawyer, lives with her wife in London; Bonnie, a former boxer, works as a bouncer in Los Angeles following a devastating defeat; and Lucky, the youngest, models in Paris while trying to outrun her hard-partying ways. They also had a fourth sister, Nicky, whose unexpected death left Avery, Bonnie, and Lucky reeling. A year later, as they each navigate grief, addiction, and ambition, they find they must return to New York to stop the sale of the apartment they were raised in.",
        pages: 352,
      },
      {
        name: "The Luminaries",
        author: "Eleanor Catton",
        rating: 3.75,
        genre: "Historical Fiction",
        themes: [
          "Gold Rush",
          "Fortune Seeking",
          "Mystery",
          "Fate",
          "Conspiracy",
          "Victorian Era",
        ],
        published: 2013,
        description:
          "It is 1866, and young Walter Moody has come to make his fortune upon the New Zealand goldfields. On the stormy night of his arrival, he stumbles across a tense gathering of twelve local men who have met in secret to discuss a series of unexplained events: A wealthy man has vanished, a prostitute has tried to end her life, and an enormous fortune has been discovered in the home of a luckless drunk. Moody is soon drawn into the mystery: a network of fates and fortunes that is as complex and exquisitely ornate as the night sky. Richly evoking a mid-nineteenth-century world of shipping, banking, and gold rush boom and bust, The Luminaries is a brilliantly constructed, fiendishly clever ghost story and a gripping page-turner.",
        pages: 848,
      },
      {
        name: "The Sentence",
        author: "Louise Erdrich",
        rating: 3.95,
        genre: "Magical Realism",
        themes: [
          "Ghost Story",
          "Social Justice",
          "Pandemic Life",
          "Bookstore Culture",
          "Indigenous Identity",
          "Redemption",
        ],
        published: 2021,
        description:
          "A small independent bookstore in Minneapolis is haunted from November 2019 to November 2020 by the store's most annoying customer. Flora dies on All Souls' Day, but she simply won't leave the store. Tookie, who has landed a job selling books after years of incarceration that she survived by reading with murderous attention, must solve the mystery of this haunting while at the same time trying to understand all that occurs in Minneapolis during a year of grief, astonishment, isolation, and furious reckoning.",
        pages: 387,
      },
      {
        name: "Yellowface",
        author: "R.F. Kuang",
        rating: 3.76,
        genre: "Literary Fiction",
        themes: [
          "Cultural Appropriation",
          "Publishing Industry",
          "Identity Theft",
          "Literary Fraud",
          "Race Relations",
          "Artistic Ethics",
        ],
        published: 2023,
        description:
          "White lies. Dark humor. Deadly consequences… Bestselling sensation Juniper Song is not who she says she is, she didn’t write the book she claims she wrote, and she is most certainly not Asian American—in this chilling and hilariously cutting novel from R.F. Kuang, the #1 New York Times bestselling author of Babel.",
        pages: 336,
      },
    ],
    sidebar: {
      mainText:
        "Quotist is where moments from books become memories. We collect those special lines that stay with you, word by word.",
      quickTips: [
        "Explore memorable quotes from modern books",
        "Find wisdom in authors' words",
        "Let these words be your daily dose of inspiration",
      ],
    },
  });
};

/* GET 'Book info' page */
const bookInfo = function (req, res) {
  res.render("book-info", {
    title: "Quotist · Book Details",
    pageHeader: {
      title: "Book Details",
      strapline: "Discover the Words That Matter",
    },
    book: {
      name: "Demon Copperhead",
      author: "Barbara Kingsolver",
      rating: 4.49,
      genre: "Literary Fiction",
      themes: [
        "Rural America",
        "Drug Addiction",
        "Foster Care",
        "Poverty",
        "Coming of Age",
        "Survival",
      ],
      published: 2022,
      description:
        "Set in the mountains of southern Appalachia, this is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father's good looks and copper-colored hair, a caustic wit, and a fierce talent for survival. In a plot that never pauses for breath, relayed in his own unsparing voice, he braves the modern perils of foster care, child labor, derelict schools, athletic success, addiction, disastrous loves, and crushing losses. Through all of it, he reckons with his own invisibility in a popular culture where even the superheroes have abandoned rural people in favor of cities.",
      pages: 560,
    },
    quotes: [
      {
        text: "The wonder is that you could start life with nothing, end with nothing, and lose so much in between.",
        book: "bookId_will_be_here", // Here should be an ObjectId but it's hardcoded for now
      },
      {
        text: "There’s this thing that happens, let’s say at school where a bunch of guys are in the bathroom, at the urinal, laughing about some dork that made an anus of himself in gym. You’re all basically nice guys, right? You know right from wrong, and would not in a million years be brutal to the poor guy’s face. And then it happens: the dork was in the shitter. He comes out of the stall with this look. He heard everything. And you realize you’re not really that nice of a guy. This is what I would say if I could, to all smart people of the world with their dumb hillbilly jokes: We are right here in the stall. We can actually hear you.",
        book: "bookId_will_be_here",
      },
      {
        text: "At the time, I thought my life couldn’t get any worse. Here’s some advice: Don’t ever think that.",
        book: "bookId_will_be_here",
      },
      {
        text: "It’s safer knowing more about people than they know about you.",
        book: "bookId_will_be_here",
      },
      {
        text: "I got up every day thinking the sun was out there shining, and it could just as well shine on me as any other human person.",
        book: "bookId_will_be_here",
      },
    ],
    sidebar: {
      mainText:
        "Every book has lines that stay with you forever. Let's find yours.",
      callToAction:
        "Explore memorable quotes that capture the essence of this book.",
    },
  });
};

module.exports = {
  homelist,
  bookInfo,
};
