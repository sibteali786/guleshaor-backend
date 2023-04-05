const Mongoose = require("mongoose");

const scheduleSchema = new Mongoose.Schema({
  mentor: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
  day: {
    type: Date,
    required: true,
  },
  dayStart: {
    type: Date,
    required: true,
  },
  dayEnd: {
    type: Date,
    required: true,
  },
  eventDuration: {
    type: Number,
    required: true,
  },
  events: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  mentorId: {
    type: String,
    required: true,
  },
});

module.exports = Mongoose.model("Schedule", scheduleSchema);
