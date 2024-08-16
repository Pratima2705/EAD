const express = require('express')
const mongoose = require('mongoose')
const studentsRouter = require('./controller/students')
const url = 'mongodb://localhost:27017/cbit'
const app = express()
mongoose.connect(url)
const conn = mongoose.connection
conn.on('open',() =>
{
    console.log('Connected')
})
app.use(express.json())
app.use('/students',studentsRouter)
app.listen(9000,() =>
{
    console.log('Server started')
})