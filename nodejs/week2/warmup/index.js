const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;


app.get('/numbers/add', (req, res) =>{
const first =  parseInt(req.query.first);
const second = parseInt(req.query.second);
console.log(req.query);
res.send(`${first+second}`);
})


app.get('/numbers/multiply/:first/:second', (req, res) =>{
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);
    console.log(`${first}, ${second}`);
    res.send(`${first * second}`);
})




app.listen(PORT , () => console.log(`Server is listening to port: ${PORT}`));