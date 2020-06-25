
const express = require('express');
const mealRouter = express.Router();

const meals = require('./../data/meals.json');
const reviews = require('./../data/reviews.json');


mealRouter.get('/', (req, res) =>{
    const mealsWithReviews = meals.map(meal => {
        const review = reviews.filter(review => review.mealId == meal.id);
        if(review)
            meal.Reviews = review
        else
            meal.reviews = [];
            return meal;
    })
    res.send(mealsWithReviews);
})

mealRouter.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const mealWithReview = meals.filter(meal => meal.id == id).map(meal =>{
        const review = reviews.filter(review => review.mealId == meal.id);
        meal.reviews = review;
        return meal;
    })

    const validateInputData = mealWithReview.length > 0 && typeof id === 'number';

    validateInputData ? res.json(mealWithReview) : res.send(`Bad request! check if you are searching for correct mealId and its a number`);

    res.json(mealWithReview);
})

mealRouter.get('/api/meals', (req, res) =>{
    const maxPrice = parseInt(req.query.maxPrice);
    console.log(`max price :${maxPrice}`)
    const mealsLessThanMaxPrice = meals.filter(meal => meal.price < maxPrice);

    maxPrice ? res.json(mealsLessThanMaxPrice) : res.send(`Bad request! check query input`);

})

mealRouter.get('/api/meals-title', (req, res) =>{
    const inputTitle = req.query.title.toLowerCase();
    console.log(`title: ${inputTitle}`);
    const mealsWithTitleMatch = meals.filter(meal => meal.title.toLowerCase().includes(inputTitle));
    console.log(mealsWithTitleMatch.length);
    inputTitle ? res.json(mealsWithTitleMatch) : res.send(`Bad request! check the query parameter`);
})


mealRouter.get('/api/created-after', (req, res) =>{
    const inputDate = new Date(req.query.createdAfter).valueOf();
    console.log(`date: ${inputDate}`);
    const mealsCreatedAfter = meals.filter(meal => new Date(meal.createdAt).valueOf() > inputDate);
    inputDate ? res.json(mealsCreatedAfter) : res.send(`Bad request! check input parameters`);
})

mealRouter.get('/api/guest-limit', (req, res) =>{
    const limit = parseInt(req.query.limit);
    console.log(`guest limit: ${limit}`);
    const mealsWithGuestLimit = meals.filter(meal => meal.maxNumberOfGuests === limit);
    limit ? res.json(mealsWithGuestLimit) : res.send(`Bad request! check input query paramter`);
})


module.exports = mealRouter;


