var express = require('express');
var router = express.Router();
var db = require("../config/database")

let movies = db.collection('movies');

/* GET users listing. */
router.get('/', function (req, res, next) {
  let movie_list = []

  movies.get().then(snapshop => {
    snapshop.forEach(movie => {
      movie_list.push(movie.data());
    })

    res.status(200).json({
      message: "success",
      data: movie_list
    });
  }).catch(err => {
    console.log("Error getting movies", err);
    res.status(500).json({
      message: err
    })
  })
});

router.post('/', function (req, res, next) {
  movies.add({ id: req.body.id, title: req.body.title }).then(function () {
    res.status(200).json({
      message: "Movie Created"
    })
  }).catch(function (error) {
    console.error("Error writing document: ", error);
    res.status(500).json({
      message: error
    })
  });
});

module.exports = router;
