const router = require("express").Router();
const bookRoutes = require("./books");
const bookSearch = require("./search");

// Book routes
router.use("/books", bookRoutes);
router.use("/search", bookSearch);

module.exports = router;