const express = require("express");
const router = express.Router();
// import pool
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  // log the client request's full url
  console.log(`PUT request at ${req.baseUrl}${req.url}`);
  // grab the target id from the url param
  const id = req.params.id;
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  // user input id will be sanitized
  pool
    .query(queryText, [id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error making query ${queryText} (id:${id}):`, err);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  // select all columns of all rows from the table and order by id
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

// POST route
router.post("/", (req, res) => {
  console.log(`POST request at ${req.baseUrl}${req.url}`);
  const newItem = req.body;
  if (newItem.path === "") {
    res.sendStatus(400);
  } else if (newItem.path !== "") {
    const queryText = `INSERT INTO "gallery" ("path", "description") VALUES ($1, $2);`;
    pool
      .query(queryText, [newItem.path, newItem.description])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(`Error making query ${queryText}:`, err);
        res.sendStatus(500);
      });
  }
});

// DELETE route
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(`DELETE request at ${req.baseUrl}${req.url}`);
  const queryText = `DELETE FROM "gallery" WHERE "id" = $1;`;
  pool
    .query(queryText, [id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error making query ${queryText}:`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
