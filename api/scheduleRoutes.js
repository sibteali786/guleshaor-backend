const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authMiddleware");

const Schedule = require("../models/scheduleModel");
const Mentor = require("../models/mentorModel");
const Event = require("../models/eventModel");
const { createSchedule } = require("../controllers/scheduleController");

router.route("/create").post(isAuthenticated, createSchedule);
