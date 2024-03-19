const router = require("express").Router();
const { prisma } = require('../db/index.js');

// functions
const addDelay = () => {
  for (i = 0; i < 1000000000; i++) {}
};

// routes
router.get("/movies/list", async (req, res) => {
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
    take: limit,
  });

  // setting lastPage flag
  let lastPage = false;
  if (returnMovies.length < 12) {
    lastPage = true;
  }

  // setting the return data
  returnData = {
    movies: returnMovies,
    lastPage: lastPage,
  };

  res.status(200).send(returnData);
});

router.get("/movie/:id", async (req, res) => {
  addDelay();

  const id = parseInt(req.params.id);

  if (!Number.isInteger(id)) {
    res.status(404).send({ message: "not found" });
    return;
  }

  const movie = await prisma.Movie.findUnique({
    where: {
      id,
    },
  });

  if (movie) {
    res.status(200).send(movie);
    return;
  }
  res.status(404).send({ message: "not found" });
});

module.exports = router;
