const express = require('express');
const app = express();

const fs = require('fs');
const meals = fs.readFileSync(__dirname+'/../data/meals.json', 'utf-8');
const mealsJson = JSON.parse(meals);
const reviews = fs.readFileSync(__dirname+'/../data/reviews.json', 'utf-8');
const reviewJson = JSON.parse(reviews);

const limit = mealsJson.length;

const randomNumber = Math.floor((Math.random() * limit) + 1);


const randomMeal = mealsJson.filter(meal => meal.id == randomNumber).map(ranMeal =>{
    const review = reviewJson.filter(review => review.mealId = ranMeal.id);
    if(review)
    ranMeal.reviews = review;
    else
    ranMeal.reviews = [];
    return ranMeal;
})

app.get('/', (req, res) => {
    res.send(randomMeal);
})

module.exports = app;