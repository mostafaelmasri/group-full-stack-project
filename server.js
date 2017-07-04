var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
// mongoose.Promise = require('bluebird');
var port = process.env.PORT || 8000;


app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "public")));



app.listen(port, function() {
  console.log(`listening on ${port}`)
});
