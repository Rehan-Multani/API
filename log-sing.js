const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}));

mongoose.connect('mongodb+srv://newDoctor:tND1w2lLKDE8oA2B@cluster0.oglqeqt.mongodb.net/NewDoctor', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.post('/signup', async (req, res) => {
    const { name,email, password } = req.body;
    const user = await User.findOne({ name });
    if (user) return res.status(400).send('User already registered.');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email,password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, 'herjbhfiurbfrbnf');
    res.send(token);
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = jwt.sign({ _id: user._id }, 'dwegdehgehv');
    res.send(token);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
