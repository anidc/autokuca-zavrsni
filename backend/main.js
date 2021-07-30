const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const { getUserById, saveUser, loginUser, getAllUsers, banUser, activeUser } = require("./controller/user/user-controller")
const { createCar, updateCar, searchCar, deleteCar, countCar, selectCarById, homeCars } = require("./controller/car/car-controller")
const { getType } = require("./controller/car/type-controller")
const { getColor } = require("./controller/car/color-controller")
const { getFuel } = require("./controller/car/fuel-controller")
const { getMake } = require("./controller/car/make-controller")
const { getModel } = require("./controller/car/model-controller")
const { getTransmission } = require("./controller/car/transmission-controller")
const { getMakeModel } = require("./controller/car/make-model-controller")
const { getCarsFromUserCart, addToCart, removeFromCart, removeAllFromCart, buyFromCart, allBoughtCars } = require("./controller/car/cart-controller")
const { addToFavorites, getCarsFromUserFavorites, removeFromFavorites } = require("./controller/car/favorites-controller")

app.get("/", (req, res) => {
    res.status(200).send("Hello from auto kuca app")
})

// User API start
app.get("/getUserById/:id", getUserById);
app.get("/getAllUsers", getAllUsers);
app.post("/registration", saveUser);
app.post("/login", loginUser);
app.put("/banUser/:id", banUser);
app.put("/activeUser/:id", activeUser);
// User API end

// Car API start
app.post("/createCar", createCar)
app.put("/updateCar/:id", updateCar)
app.get("/searchCar", searchCar)
app.get("/homeCars", homeCars)
app.get("/selectCarById/:id", selectCarById)
app.get("/countCar", countCar)
app.delete("/deleteCar/:id", deleteCar)
app.get("/getType", getType)
app.get("/getColor", getColor)
app.get("/getFuel", getFuel)
app.get("/getMake", getMake)
app.get("/getModel", getModel)
app.get("/getMakeModel/:id", getMakeModel)
app.get("/getTransmission", getTransmission)
// Car transmission API end

// Cart API start
app.get("/getCarsFromUserCart/:id", getCarsFromUserCart)
app.put("/buyFromCart/:user_id", buyFromCart)
app.get("/allBoughtCars/:user_id", allBoughtCars)
app.delete("/remove/:car_id/:user_id", removeFromCart)
app.delete("/remove/:user_id", removeAllFromCart)
app.post("/addToCart", addToCart)
// Cart API end

//  Favorites API start
app.post("/addToFavorites", addToFavorites)
app.get("/getCarsFromUserFavorites/:id", getCarsFromUserFavorites)
app.delete("/removeFromFavorites/:car_id/:user_id", removeFromFavorites)
//  Favorites API end

// User API start
// app.get("/getUserById/:id", getUserById)
// User API end


app.listen(PORT, () => console.log(`Application started on PORT: ${PORT}`))