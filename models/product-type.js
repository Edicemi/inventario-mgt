const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model("Product_Type", productSchema);