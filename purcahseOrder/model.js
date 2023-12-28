const mongoose = require("mongoose");

const department = mongoose.Schema({

  
    orderno: {
        type: String,
        required: true,
    },
    orderdate:
    {
        type: String,
        required: true,
    },
    partyaccount:
    {
        type: String,
        required: true,
    },
    purchasesalesaccount:
    {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
{
  timestamps: true,
})
module.exports = mongoose.model("purchaseorder", department);


