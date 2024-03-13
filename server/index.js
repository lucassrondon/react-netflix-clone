const express = require('express');
var cors = require('cors')
const movies = require('./movies.json');

const app = express();
app.use(cors());

app.get('/movies/list', (req, res) => {
    for (i=0; i < 1000000000; i++){}
    const limit = 12;
    let { offset } = req.query;
    
    if (!offset) {
        offset = 0;
    }

    returnData = []
    counter = 0; 
    while (movies[offset] && counter < limit) {
        returnData.push(movies[offset]);
        offset++;
        counter++;
    }

    res.status(200).send(returnData);
});

app.get('/movie/:id', (req, res) => {
    for (i=0; i < 1000000000; i++){}

    const {id} = req.params;

    const movie = movies.find((m) => m.id === id);

    if (movie) {
        res.status(200).send(movie)
    }
    res.status(404).send({'message': 'not found'});
});

app.listen(8080, () => {
    console.log('Now listening on 8080');
});