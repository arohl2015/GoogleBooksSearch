const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
//return all saved books as JSON
  .get(booksController.findAll)
//used to save a new book
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
//used to delete a book from our db
  .delete(booksController.remove);

module.exports = router;