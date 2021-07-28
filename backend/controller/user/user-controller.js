const conn = require("../../connection")


const getAllUsers = (req, res) => {
    conn.query(`SELECT * FROM user`, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const getUserById = (req, res) => {
    const id = req.params.id;
    conn.query(`SELECT * FROM user WHERE id = ${id}`, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results[0] || {})
    })
}

const banUser = (req, res) => {
    const { id } = req.params;
    conn.query(`UPDATE user SET status = "BAN" WHERE id = ?`, [id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const activeUser = (req, res) => {
    const { id } = req.params;
    conn.query(`UPDATE user SET status = "ACTIVE" WHERE id = ?`, [id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const saveUser = (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, username, password, address } = req.body
    const sql = "INSERT INTO user(first_name, last_name, email, username, password, address) values(?,?,?,?,?,?)"
    conn.query(sql, [firstName, lastName, email, username, password, address], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ id: results.insertId })
    })
}

const loginUser = (req, res) => {
    const { email, password } = req.body
    const sql = "SELECT * FROM user WHERE password = ? and (email = ? or username = ?)"
    conn.query(sql, [password, email, email], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results[0] || {})
    })
}




module.exports = {
    getUserById, saveUser, loginUser, getAllUsers, banUser, activeUser
}