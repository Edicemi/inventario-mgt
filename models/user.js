const mongoose = require('mongoose');
const mgtSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    password: {
        type: String,
        required: true,
    },
    // confirmPassword: {
    //     type: String,
    //     required: true,
    // },
    role: {
        type: String,
        enum: ["Manager", "Employee", "User"],
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('roles', mgtSchema);