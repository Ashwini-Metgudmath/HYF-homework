const express = require('express');
const app = express();

const fs = require('fs');
const meals = fs.readFileSync(__dirname + '/../data/meals.json', 'utf-8');
const mealsJson = JSON.parse(meals);
const reviews = fs.readFileSync(__dirname + '/../data/reviews.json', 'utf-8');
const reviewsJson = JSON.parse(reviews);


const cheapMeals = mealsJson.filter(meal => meal.price <= 30).map(cheapMeal => {
    const review = reviewsJson.filter(review => review.mealId == cheapMeal.id);
    if(review)
    cheapMeal.reviews = review;
    else
    cheapMeal.reviews = [];
    return cheapMeal;
});



app.get('/', (req, res) =>{
res.send(cheapMeals)
})

module.exports = app;