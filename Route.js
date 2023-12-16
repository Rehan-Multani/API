const express = require("express");
const multer = require('multer'); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const {GetAlldata, Getdata,Postdata,Putdata,DeleteData } =

 require('./Ctrl')

const router = express.Router();

router.get("/",GetAlldata)
router.get("/:_id",Getdata)

router.post("/",upload.single('Images'), Postdata)
router.put("/:_id",upload.single('Images'),Putdata)
router.delete("/:id",DeleteData)

module.exports = router;