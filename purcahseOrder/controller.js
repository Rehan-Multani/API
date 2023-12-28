const db = require('../purcahseOrder/model');

const getpaginate = async (req, res) => {
    try {
        let data = await db.find()
        res.json(data)
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const Getdata = async (req, res) => {
    try {
        const result = await db.find({ _id: req.params._id })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const Postdata = async (req, res) => {
    try {
        const count = await db.countDocuments();
        const generatedID = `ORDER${(count + 1).toString().padStart(4, '0')}`;

        let dta = await db({
            orderno:generatedID,
            ...req.body
        });
        let result = await dta.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const Putdata = async (req, res) => {
    try {
        let result = await db.updateMany(
            { _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const DeleteData = async (req, res) => {
    try {
        let result = await db.deleteMany({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { getpaginate, Getdata, Postdata, Putdata, DeleteData };
