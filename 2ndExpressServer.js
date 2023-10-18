const express = require("express");
const server = express();

const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  { id: 3, title: "Parasite", director: "Bong Joon-ho", year: 2019 },
  { id: 4, title: "The Matrix", director: "The Wachowskis", year: 1999 },
];

//1.
server.get("/", (req, res) => {
  res.send("Welcome to the Movie API! Use /info for guidance");
});

//2.
server.get("/info", (req, res) => {
  res.send(
    "To fetch all movies,use GET /movies. To add a new movie, use POST / mo vie"
  );
});

//3.
server.get("/movies", (req, res) => {
  res.send(movies);
});

//4.
server.get("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id, 10); 
  const movie = movies.find((m) => m.id === movieId); 
  if (movie) {
    res.send(movie); 
    res.status(404).send("Movie not found"); 
  }
});


server.listen(4000, () => {
    console.log(`Listening on port  http://localhost:${PORT} `);
});

