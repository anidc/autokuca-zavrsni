const conn = require("../../connection")

const addToCart = (req, res) => {
    const { user_id, car_id } = req.body;
    const sql = "INSERT INTO cart (user_id, car_id, status) values(?, ?, 'Pending')"
    conn.query(sql, [user_id, car_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ id: results.insertId })
    })
}

const getCarsFromUserCart = (req, res) => {
    const { id } = req.params
    const sql = "SELECT p.* from cart c join car p on c.car_id = p.id where user_id = ? and status = 'Pending'"
    conn.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const removeFromCart = (req, res) => {
    const { car_id, user_id } = req.params;
    const sql = "DELETE FROM cart WHERE car_id = ? and user_id = ? LIMIT 1"
    conn.query(sql, [car_id, user_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ msg: "Uspjesno obrisan auto" })
    })
}

const removeAllFromCart = (req, res) => {
    const { user_id } = req.params;
    const sql = "DELETE FROM cart WHERE user_id = ?"
    conn.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ msg: "Uspjesno obrisan cart" })
    })
}

const buyFromCart = (req, res) => {
    const { user_id } = req.params;

    let sql = "UPDATE cart SET status='DONE' WHERE user_id = ?"

    conn.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ msg: "Uspjesno kupljeni proizvodi" })
    })
}

const allBoughtCars = (req, res) => {
    const { user_id } = req.params;
    const sql = "SELECT title, km, price, discount, main_image FROM cart ct JOIN car c ON ct.car_id = c.id WHERE status ='DONE' and user_id = ?;"
    conn.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}




module.exports = {
    addToCart, getCarsFromUserCart, removeFromCart, removeAllFromCart, buyFromCart, allBoughtCars
}