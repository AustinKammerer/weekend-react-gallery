const express = require("express");
const router = express.Router();
// import pool
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  // log the request's full url
  console.log(`GET request at ${req.baseUrl}${req.url}`);
  const queryText = `SELECT * FROM "gallery" ORDER BY "id"`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows); // send the table rows back to the client
    })
    .catch((err) => {
      console.log(`Error making query ${queryText}`, err);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
