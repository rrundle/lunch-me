var http = require('http')
var express = require('express')
var twilio = require('twilio')

var app = express()

var PORT = process.env.PORT


app.post('/', function(req, res) {
  var twilio = require('twilio')
  var twiml = new twilio.TwimlResponse()
  twiml.message('The Robots are coming! Head for the hills!')
  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})

http.createServer(app).listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})
