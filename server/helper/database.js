const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.resolve(__dirname, "..", "../data/my-database.sqlite");
const db = new sqlite3.Database(dbPath);

module.exports = db;
