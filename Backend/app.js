const express = require('express')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api', userRoutes)

module.exports = app;