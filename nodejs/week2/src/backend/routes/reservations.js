const express = require('express');
const app = express();

const fs = require('fs');
const reservations = fs.readFileSync(__dirname+'/../data/reservations.json', 'utf-8');
const reservationsJson = JSON.parse(reservations);

app.get('/', (req, res) =>{
    res.send(reservationsJson);
})

module.exports = app;