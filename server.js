require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/subscriber', { useNewUrlParser:true })
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true })
const db = mongoose.connection
db.on('error', (error)=>console.error(error))
db.once('open', ()=>console.log('Connect to DB'))

app.use(express.json())

const subscriberRouter = require('./routes')
app.use('/subscribers', subscriberRouter)
// 'localhost:3000/subscribers/sfkdf'

app.listen(2020, () => console.log('Server Started'))