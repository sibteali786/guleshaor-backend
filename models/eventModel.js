const Mongoose = require("mongoose");
const eventSchema = new Mongoose.Schema({
  menteeEmail: {
    type: String,
    required: true,
  },
  mentorId: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
  schedule: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Schedule",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  day: {
    type: Date,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});