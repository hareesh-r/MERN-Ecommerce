const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');

env.config();

//MongoDB Connection
//mongodb+srv://root:<password>@cluster0.bxg8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_ADMIN}:${process.env.MONGO_DB_PASSWORD}@cluster0.bxg8u.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('MongoDB Connection Successful');
});


app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server running on port ' + process.env.PORT);
});