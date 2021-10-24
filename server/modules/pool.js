const pg = require("pg");
const Pool = pg.Pool;

// configure for our database
const config = {
  database: "react_gallery",
  host: "localhost",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

// create the a new Pool instance
const pool = new Pool(config);

// terminal logs from database connection success/failure
pool.on("connect", () => {
  console.log("connected to database");
});
pool.on("error", (err) => {
  console.log("error connecting to database", err);
});

module.exports = pool;
