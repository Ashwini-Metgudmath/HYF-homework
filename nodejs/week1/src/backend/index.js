const express = require('express');
const app = express();

const mealsRouter = require('../backend/routes/meals');
app.use('/meals', mealsRouter);



app.listen(3000, () => console.log('Server started...'));