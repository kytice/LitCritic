require("dotenv").config();
const mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URI;
if (!dbURI) {
  console.error("MONGODB_URI is not defined in environment variables");
  process.exit(1);
}

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

mongoose.connection.on("error", (err) => {
  console.log("Database error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database");
});

require("./books");
