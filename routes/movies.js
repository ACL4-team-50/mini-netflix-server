var express = require('express');
var router = express.Router();
var db = require("../config/database")

let movies = db.collection('movies');

/* GET users listing. */
router.get('/', function (req, res, next) {
  movies.get().then(snapshop => {
    snapshop.forEach(movie => {
      console.log(movie);
    })
  }).catch(err => {
    console.log("Error getting movies", err);
  })
  res.send('Movies List');
});

router.post('/', function (req, res, next) {
  movies.add({ id: 1, title: "Some title" }).then(function () {
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
