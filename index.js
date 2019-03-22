const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const env = require('./config/environment')
const router = require('./config/routes')

mongoose.connect(env.db.development , {useNewUrlParser: true})

app.use(bodyParser.json())
app.use('/api', router)


app.listen(env.port, ()=> `App is listening on port ${env.port}`)
