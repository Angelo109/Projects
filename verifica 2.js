const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
    console.log('Primo middleware');
    res.send('<p>Prima risposta</p>');
    });
    

app.use((req, res, next) => {
    console.log('Secondo middleware');
    res.send('<h1>Seconda risposta</h1>');
});



app.listen(3000);