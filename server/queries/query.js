const fs = require("fs");
const path = require("path");

function loadSql(file) {
  const fullPath = path.join(__dirname, file);
  return fs.readFileSync(fullPath, "utf8");
}

module.exports = {
  loadSql,
};
