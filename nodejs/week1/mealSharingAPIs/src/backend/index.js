const express = require('express');
const app = express();

/*app.use((req, res, next) => {
    console.log("method " + req.method);
    next();
});
app.use((req, res, next) => {
    console.log("date " + Date.now());
    next();
});*/

const mealsRouter = require('../backend/routes/meals');
app.use('/meals', mealsRouter);

const cheapMealsRouter = require('./routes/cheapMeals');
app.use('/cheap-meals', cheapMealsRouter);

const largeMealsRouter = require('./routes/largeMeals');
app.use('/large-meals', largeMealsRouter);

const mealRouter = require('./routes/meal');
app.use('/meal', mealRouter);

const allReservationsRouter = require('./routes/reservations');
app.use('/reservations', allReservationsRouter);

const reservationRouter = require('./routes/reservation');
app.use('/reservation', reservationRouter);



app.listen(3000, () => console.log('Server started...'));