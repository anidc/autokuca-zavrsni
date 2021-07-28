const conn = require("../../connection")

const getColor = (req, res) => {
    const sql = "SELECT * FROM color"
    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

module.exports = {
    getColor
}