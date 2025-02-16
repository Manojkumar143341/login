const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['student', 'faculty'], default: 'student' }
});

const User = mongoose.model('User', UserSchema);
module.exports = User; // ✅ Correct export
