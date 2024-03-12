const express = require('express');
var cors = require('cors')
const movies = require('./movies.json');

const app = express();
app.use(cors());

app.get('/movies/list', (req, res) => {
    for (i=0; i < 1000000000; i++){}

    res.status(200).send(movies);
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