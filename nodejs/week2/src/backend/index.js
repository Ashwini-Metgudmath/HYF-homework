const express = require('express');
const app = express();

const mealRouter = require('./routes/meals');
//const reservations = require('./routes/reservations');
//const reviews = require('./routes/reviews');

const PORT = process.env.PORT || 8000;
app.set('json spaces', 2);

app.use((req, res, next) => {
    console.log("method " + req.method);
    next();
});
app.use((req, res, next) => {
    console.log("date " + Date.now());
    next();
});


app.use('/meals', mealRouter);

//app.use('/reservations', reservations);

//app.use('/reviews', reviews);



app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));