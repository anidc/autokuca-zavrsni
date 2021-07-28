const conn = require("../../connection")

const getMakeModel = (req, res) => {
    const { make_id } = req.params
    const sql = "SELECT * FROM model where make_id = ?"
    conn.query(sql, [make_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

module.exports = {
    getMakeModel
}