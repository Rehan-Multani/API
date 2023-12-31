const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;



const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/products", require('./Route'));
app.use("/reservation", require('./reservationroute'));
app.use("/reward", require('./rewardRoute'));
app.use("/api/order", require('./purcahseOrder/route'));



app.listen(PORT, () => {
  console.log(
    `Hritik bhai no Tention Your Server is running  at PORT ${PORT} `
  );
});
