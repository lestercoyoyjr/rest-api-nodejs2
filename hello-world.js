// This file is for testing purpose

const express = require('express');

const app = express();

const port = 4000;

// GET test
app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))