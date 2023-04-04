const express = require('express')
const app = express()


app.get('*', function (req, res) {
  console.log({time: new Date(), headers: req.headers, body: req.body})
  res.json({headers: req.headers, body: req.body})
})

app.listen(3000)