const mongoose = require("mongoose");

const department = mongoose.Schema({

  
    name: {
        type: String,
        required: true,
    },
    gender:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
    },
    phonenumber:
    {
        type: String,
        required: true,
    },
    reservationcause: {
        type: String,
        required: true
    }
},
{
  timestamps: true,
})
module.exports = mongoose.model("resevation", department);


