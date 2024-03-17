// requires
const express = require('express');
var   cors    = require('cors');
const { prisma } = require('./db/index.js');

// express setup
const app = express();
app.use(cors());

// functions
const addDelay = () => {
    for (i=0; i < 1000000000; i++){}
}

// routes
app.get('/movies/list', async (req, res) => {
    addDelay();

    // setting the offset
    let offset = parseInt(req.query.offset);
    if (!offset) {
        offset = 0;
    }

    // setting the limit
    const limit = 12;

    // getting the movies
    returnMovies = await prisma.Movie.findMany({
        skip: offset,
        take: limit
    });

    
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

app.get('/movie/:id', async (req, res) => {
    addDelay();

    const id = parseInt(req.params.id);
    
    if (!Number.isInteger(id)) {
        res.status(404).send({'message': 'not found'});
        return;
    } 

    const movie = await prisma.Movie.findUnique({
        where: {
            id
        }
    });

    if (movie) {
        res.status(200).send(movie);
        return;
    }
    res.status(404).send({'message': 'not found'});
});

app.listen(8080, () => {
    console.log('Now listening on 8080');
});