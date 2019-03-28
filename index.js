const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const env = require('./config/environment')
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')

mongoose.connect(env.db.development , {useNewUrlParser: true})

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(errorHandler)

app.listen(env.port, ()=> `App is listening on port ${env.port}`)

module.exports = app

/* "start": "node index.js",
"build": "webpack -p", */
