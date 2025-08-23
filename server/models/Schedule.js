const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: false },
  location: { type: String, required: false },
  type: { type: String, required: false }
});

const scheduleSchema = new mongoose.Schema({
  time: { type: String, required: true },
  classes: {
    Mon: classSchema,
    Tue: classSchema,
    Wed: classSchema,
    Thu: classSchema,
    Fri: classSchema,
    Sat: classSchema,
    Sun: classSchema,
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
