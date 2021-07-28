const conn = require("../../connection")

const searchCar = (req, res) => {
    const { make_id, price, type_id, model_id } = req.query;
    let sql = 'SELECT * FROM car WHERE 1=1'
    if (make_id) {
        sql += ` AND make_id = ${make_id}`
    }
    if (price) {
        sql += ` AND price = ${price}`
    }
    if (type_id) {
        sql += ` AND price = ${type_id}`
    }
    if (model_id) {
        sql += ` AND price = ${model_id}`
    }
    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const createCar = (req, res) => {
    const { title, make_id, model_id, km, color_id, price, discount, year, fuel_id, kw, hp, description, type_id, transmission_id, main_image, image1, image2, image3 } = req.body;
    const sql = "INSERT INTO car(title, make_id, model_id, km, color_id, price, discount, year, fuel_id, kw, hp, description, type_id, transmission_id, main_image, image1, image2, image3) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    conn.query(sql, [title, make_id, model_id, km, color_id, price, discount, year, fuel_id, kw, hp, description, type_id, transmission_id, main_image, image1, image2, image3], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const homeCars = (req, res) => {
    conn.query("SELECT * FROM car LIMIT 4", (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const deleteCar = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM car WHERE id = ?"
    conn.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json({ msg: "Uspjesno obrisan auto" })
    })
}

const updateCar = (req, res) => {
    const id = +req.params.id
    const { title, make_id, model_id, km, color_id, price, discount, year, fuel_id, kw, hp, description, type_id, transmission_id, main_image, image1, image2, image3 } = req.body;
    const sql = "UPDATE car SET title = ?, make_id = ?, model_id = ?, km = ?, color_id = ?, price = ?, discount = ?, year = ?, fuel_id = ?, kw = ?, hp = ?, description = ?, type_id = ?, transmission_id = ?, main_image = ?, image1 = ?, image2 = ?, image3 = ? WHERE id = ?"
    conn.query(sql, [title, make_id, model_id, km, color_id, price, discount, year, fuel_id, kw, hp, description, type_id, transmission_id, main_image, image1, image2, image3, id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results)
    })
}

const countCar = (req, res) => {
    const sql = "SELECT count(1) as numberOfCars from car"
    conn.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results[0] || {})
    })
}

const selectCarById = (req, res) => {
    const { id } = req.params
    const sql = "SELECT car.price, car.discount, car.km, car.main_image, car.image1, car.image2, car.image3, car.year, car.hp, car.kw, car.description, type.car_type, car.title, car.id, make.make, model.model, color.color, fuel.fuel_type, transmission.transmission_type FROM ((((((car INNER JOIN make ON car.make_id = make.id) INNER JOIN model on car.model_id = model.id) INNER JOIN transmission on car.transmission_id = transmission.id) INNER JOIN color on car.color_id = color.id) INNER JOIN fuel on car.fuel_id = fuel.id) INNER JOIN type on car.type_id = type.id) where car.id = ?"
    conn.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err)
        res.status(200).json(results[0] || {})
    })
}


module.exports = {
    searchCar, createCar, deleteCar, homeCars, updateCar, countCar, selectCarById
}