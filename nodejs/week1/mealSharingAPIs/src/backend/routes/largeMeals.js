const express = require('express');
const app = express();

const fs = require('fs');
const meals = fs.readFileSync(__dirname+'/../data/meals.json', 'utf-8');
const mealsJson = JSON.parse(meals);
const reviews = fs.readFileSync(__dirname+'/../data/reviews.json', 'utf-8');
const reviewsJson = JSON.parse(reviews);

const guests = mealsJson[0].maxNumberOfGuests;
const largeMeals = mealsJson.filter(meal => meal.maxNumberOfGuests >= guests).map(largeMeal =>{
    const review = reviewsJson.filter(review => review.mealId == largeMeal.id);
    largeMeal.reviews = review;
    return largeMeal;
})

app.get('/', (req, res) =>{
    res.send(largeMeals);
})

module.exports = app;