const mongoose = require("mongoose");

const department = mongoose.Schema({

  
    order_no: {
        type: String,
        required: true,
    },
    order_date:
    {
        type: String,
        required: true,
    },
    partyaccount:
    {
        type: String,
        required: true,
    },
    purchasesales_account:
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


