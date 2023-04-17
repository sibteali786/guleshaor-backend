const { createEvent, getEventbyId } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
router.route("/create").post(protect, createEvent);
router.route("/:eventId").get(getEventbyId);

module.exports = router;
