//creating the schema for our db
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  authors: [],
  description: { type: String },
  image: { type: String },
  link: { type: String, unique: true },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;