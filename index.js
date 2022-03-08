const express = require('express')
const fileUpload = require("express-fileupload")
const cors = require("cors")

// load routes.
const userRoutes = require('./src/routes/user')

// defines
const PORT = process.env.PORT || 4000

const app = express()

// middlewares 
app.use(cors())
app.use(express.urlencoded({ extended: true, }))
app.use(fileUpload())
app.use(express.json())



// routes
app.use(userRoutes)


app.listen(PORT, () => console.log("Server started on port:" + PORT))