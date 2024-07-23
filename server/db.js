const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgrers",
    password: "kth18822",
    host:"localhost",
    port: 5432,
    database:"perntodo"
});

module.exports = pool;
