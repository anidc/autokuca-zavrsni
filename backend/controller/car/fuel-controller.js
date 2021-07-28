const conn = require("../../connection")


const getFuel = (req, res) => {
    const sql = "SELECT * FROM fuel"
    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

module.exports = {
    getFuel
}