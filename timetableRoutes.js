const express = require('express');
const Timetable = require('../models/Timetable');
const router = express.Router();
const User = require("../models/user");


// Add a timetable entry
router.post('/add', async (req, res) => {
    const { day, subject, time, faculty } = req.body;
    const newEntry = new Timetable({ day, subject, time, faculty });
    await newEntry.save();
    res.json({ message: "Timetable Entry Added" });
});

// Get all timetable entries
router.get('/', async (req, res) => {
    const timetable = await Timetable.find();
    res.json(timetable);
});

module.exports = router;
