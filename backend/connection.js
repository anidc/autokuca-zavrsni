const mysql = require("mysql")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anid",
    database: "autokuca"
})

conn.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected")
})

module.exports = conn;