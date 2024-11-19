const express = require('express') // npm install express ----------- node expressserver.js

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World- landing/home page')
})

app.get('/shorts', function (req, res) {
  res.send('Hello World- your are seeing shorts route')
})

app.get('/account', function (req, res) {
  res.send('Hello World-- you are accessing your account info')
})

app.listen(4000)