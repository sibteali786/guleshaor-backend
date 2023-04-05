const asyncHandler = require("express-async-handler");
const Schedule = require("../models/scheduleModel");
const Mentor = require("../models/mentorModel");

// @desc    Create Schedule
// @route   Post /api/schedule/create
// @access  Private
const createSchedule = asyncHandler(async (req, res) => {
  try {
    const { mentor, day, dayStart, dayEnd, eventDuration } = req.body;
    const user = req.user.id;
    const foundUser = await Mentor.findById(user);
    if (!foundUser) {
      return res.status(404).json({ err: "User not found" });
    }
    const presentSchedule = await schedule.findOne({ user, day });
    // if schedule already exists then
    if (presentSchedule) {
      return res.status(403).json({ err: "Schedule already exists" });
    }
    // if schedule does not exist then
    const schedule = await Schedule.create({
      mentor,
      day,
      dayStart,
      dayEnd,
      eventDuration,
    });
    await await schedule.save();
    foundUser.schedules.push(schedule);
    await foundUser.save();

    res.status(200).json({
      _id: schedule._id,
      mentor: schedule.mentor,
      day: schedule.day,
      dayStart: schedule.dayStart,
      dayEnd: schedule.dayEnd,
      eventDuration: schedule.eventDuration,
    });
  } catch (error) {
    return res.status(500).json({ err: error });
  }
});

module.exports = { createSchedule };
