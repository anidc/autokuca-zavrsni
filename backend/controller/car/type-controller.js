const conn = require("../../connection")

const getType = (req, res) => {
    const sql = "SELECT * FROM type"
    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

module.exports = {
    getType
}