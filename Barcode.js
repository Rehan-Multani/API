const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://pawaryash2411:fQC1Ke7MtfYWUByG@cluster0.nxrjp4d.mongodb.net/Barcode", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BarcodeSchema = new mongoose.Schema({
  productName: String,
  price: String,
  quantity: String,
  tax: String,
  description: String,
  productId: String,
  date: { type: Date, default: Date.now },
});

const Barcode = mongoose.model("Barcode", BarcodeSchema);

// Routes
app.post("/generate", async (req, res) => {
  const baarcode = await Barcode.create(req.body);
  res.send(baarcode); // Respond with the saved barcode document
});

app.get("/generate", async (req, res) => {
    const baarcode = await Barcode.find();
    res.send(baarcode); // Respond with the saved barcode document
  });

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
