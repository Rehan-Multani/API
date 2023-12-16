const mongoose = require("mongoose");

const data = mongoose.Schema({

    Title: {
        type: String,
        required: true,

    },
    Description:
    {
        type: String,
        required: true,

    },
    Price: {
        type: String,
        required: true,

    },
    Stock:
    {
        type: String,
        required: true,

    },
    Image: {
        type: String,
        required: true,

    },
    Category:
    {
        type: String,
        required: true,

    },
})
module.exports = mongoose.model("categorynames", data)