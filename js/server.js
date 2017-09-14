//Lets require/import the HTTP module
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../"));


app.listen(3000, function () {
    console.log('Sphere calendar listening on port 3000!');
});
