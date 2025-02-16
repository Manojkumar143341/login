const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({
    day: String,
    subject: String,
    time: String,
    faculty: String
});

module.exports = mongoose.model('Timetable', TimetableSchema);
