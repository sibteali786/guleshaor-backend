const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authMiddleware");
const {
  createSchedule,
  getSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");

router.route("/create").post(isAuthenticated, createSchedule);
router.route("/get/:userId").get(getSchedule);
router.route("/update/:scheduleId").put(isAuthenticated, updateSchedule);
router.route("/delete/:scheduleId").delete(isAuthenticated, deleteSchedule);
