const File = require('./Model');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});
const GetAlldata = async (req, res) => {

    try {
        const result = await File.find()
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const Getdata = async (req, res) => {

    try {
        const result = await File.find({ _id: req.params._id })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const Postdata = (async (req, res) => {
    try {
        if (!req.file) {
            res.send("no req")
        }
        const dataUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(dataUrl);

        // Save the Cloudinary image URL to the database
        const newImage = new File({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category,
            image: result.secure_url
        });

        let data = await newImage.save();

        res.status(201).json(data);

    } catch (error) {
        res.status(404).json(error.message)
    }
})

const Putdata = async (req, res) => {

    try {
        const dataUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(dataUrl);

        let data = await File.updateMany(
            { _id: req.params._id },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price,
                    stock: req.body.stock,
                    category: req.body.category,
                    image: result.secure_url
                }
            })
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const DeleteData = async (req, res) => {

    try {
        let result = await File.deleteMany({ _id: req.params.id },
            {
                $set: req.body
            })

        res.send(result);

    } catch (error) {

        res.status(404).json(error.message)


    }
}

module.exports = { GetAlldata, Getdata, Postdata, Putdata, DeleteData };


