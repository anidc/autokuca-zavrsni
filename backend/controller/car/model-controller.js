const conn = require("../../connection")

const getModel = (req, res) => {
    const sql = "SELECT * FROM model"
    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

module.exports = {
    getModel
}