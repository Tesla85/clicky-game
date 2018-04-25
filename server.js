
var express = require("express");

var bodyparser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");


var db = require("./models");

var app = express();


var PORT = process.env.PORT || 3000;


app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})
            