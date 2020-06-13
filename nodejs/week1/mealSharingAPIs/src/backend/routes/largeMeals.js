const express = require('express');
const app = express();

const meals= require('../data/meals.json');

const reviews = require('../data/reviews.json');

const guests = 5;
const largeMeals = meals.filter(meal => meal.maxNumberOfGuests >= guests).map(largeMeal =>{
    const review = reviews.filter(review => review.mealId == largeMeal.id);
    largeMeal.reviews = review;
    return largeMeal;
})

app.get('/', (req, res) =>{
    res.json(largeMeals);
})

module.exports = app;