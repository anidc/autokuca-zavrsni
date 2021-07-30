const conn = require("../../connection")


const addToFavorites = (req, res) => {
    const { user_id, car_id } = req.body;
    const sql = "INSERT INTO favorite (user_id, car_id) values(?, ?)"
    conn.query(sql, [user_id, car_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ id: results.insertId })
    })
}

const getCarsFromUserFavorites = (req, res) => {
    const { id } = req.params
    const sql = "SELECT p.* from favorite c join car p on c.car_id = p.id where user_id = ?"
    conn.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const removeFromFavorites = (req, res) => {
    const { car_id, user_id } = req.params;
    const sql = "DELETE FROM favorite WHERE user_id = ? and car_id = ? LIMIT 1"
    conn.query(sql, [user_id, car_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ msg: "Uspjesno obrisan auto" })
    })
}



module.exports = {
    addToFavorites, getCarsFromUserFavorites, removeFromFavorites
}