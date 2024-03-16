// requires
const express = require('express');
var   cors    = require('cors')
const movies  = require('./movies.json');

// express setup
const app = express();
app.use(cors());

// functions
const addDelay = () => {
    for (i=0; i < 1000000000; i++){}
}

// routes
app.get('/movies/list', (req, res) => {
    addDelay();

    // setting the offset
    let offset = parseInt(req.query.offset);
    if (!offset) {
        offset = 0;
    }

    // setting the limit
    const limit = 12;

    // getting the movies
    returnMovies = movies.slice(offset, offset + limit);

    // setting lastPage flag
    let lastPage = false;
    if (returnMovies.length < 12) {
        lastPage = true;
    }

    // setting the return data
    returnData = {
        "movies": returnMovies,
        "lastPage": lastPage
    }
    console.log(returnData)
    res.status(200).send(returnData);
});

app.get('/movie/:id', (req, res) => {
    addDelay();

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