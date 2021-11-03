const express = require("express");
const router = express.Router();
const { booksController } = require("../controllers");

/* Create routes for each controller in your application. */
router.get("/books", booksController.index);

router.get("/books", booksController.index);
module.exports = router;
