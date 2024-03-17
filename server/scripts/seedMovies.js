const { prisma } = require("../db/index.js");
const movies = require("../movies.json");

const seedMovies = async () => {
  const formattedMovies = movies.map(
    ({ title, description, thumbnailUrl, videoUrl, duration, genre }) => {
      return { title, description, thumbnailUrl, videoUrl, duration, genre };
    }
  );

  await prisma.Movie.createMany({ data: formattedMovies });
};

seedMovies();
