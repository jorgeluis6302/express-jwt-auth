const express = require('express')
const cors = require('cors')
const userRoutes = require('./user/routes')
const authRoutes = require('./auth/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/auth', authRoutes);

module.exports = app
