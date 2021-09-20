const mongoose = require('mongoose');
const mgtSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Manager", "Secetary", "HR"],
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('roles', mgtSchema);