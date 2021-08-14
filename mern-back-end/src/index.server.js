const express = require('express');
const app = express();
const env = require('dotenv');

env.config();

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