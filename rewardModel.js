const mongoose = require("mongoose");

const department = mongoose.Schema({

  
    name: {
        type: String,
        required: true,
    },
    reward:
    {
        type: String,
        required: true,
    },
},
{
  timestamps: true,
})
module.exports = mongoose.model("reawards", department);


