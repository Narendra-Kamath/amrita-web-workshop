const express = require("express");
const cors = require("cors");

const app = express();

const SERVER_PORT = 3000;
const CONTEXT_PATH = "/api";

const movieListData = [
  {
    title: "Jumanji",
    year: 2017,
    image: "1.jpg",
  },
  {
    title: "Jurassic Park",
    year: 1993,
    image: "2.jpg",
  },
  {
    title: "Om",
    year: 1995,
    image: "3.jpg",
  },
  {
    title: "Om Shanti Om",
    year: 2007,
    image: "4.jpg",
  },
  {
    title: "Manichitrathazhu",
    year: 1993,
    image: "5.jpg",
  },
];

app.use(cors());

app.get(`${CONTEXT_PATH}/movie-list`, (req, res) => {
    res.send(movieListData);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started listening on PORT: ${SERVER_PORT}`);
});
