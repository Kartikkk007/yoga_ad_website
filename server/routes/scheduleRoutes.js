const express = require('express');
const Schedule = require('../models/Schedule');

module.exports = (io) => {
  const router = express.Router();

  // GET all schedule data
  router.get('/', async (req, res) => {
    try {
      const schedule = await Schedule.find();
      res.json(schedule);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // PUT (update) a specific schedule item
  router.put('/:id', async (req, res) => {
    try {
      const updatedSchedule = await Schedule.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedSchedule) {
        return res.status(404).json({ message: 'Schedule not found' });
      }

      // Emit the scheduleUpdated event after successful update
      io.emit('scheduleUpdated');

      res.json(updatedSchedule);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  return router;
};
