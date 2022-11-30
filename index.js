const express = require('express')
const fs = require('fs');
const app = express()

app.get('/', (req, res) => {

    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});

app.listen(3000)