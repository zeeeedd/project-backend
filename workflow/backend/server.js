const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000



const app = express()

app.use (express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/items', require('./routes/itemRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server started running on port ${port}`))