const express = require("express");
const {
  getMentorById,
  getMentors,
} = require("../controllers/mentorController.js");

// async routes have promises returned by the schema of the db
const router = express.Router();
router.route("/").get(getMentors);
router.route("/:id").get(getMentorById);
module.exports = router;
