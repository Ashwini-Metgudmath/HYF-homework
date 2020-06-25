const express = require('express');
const app =express();

const fs = require('fs');
const reservations = fs.readFileSync(__dirname+'/../data/reservations.json', 'utf-8');
const reservationsJson = JSON.parse(reservations);

const limit = reservationsJson.length;
const randomNumber = Math.floor((Math.random() * limit) + 1);

const randomReservation = reservationsJson.filter(reservation => reservation.id == randomNumber);

app.get('/', (req, res) =>{
    res.send(randomReservation);
})

module.exports = app;