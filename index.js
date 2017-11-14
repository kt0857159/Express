var express = require('express');
var url = require('url');
var path = require('path');

var app = express();


app.get('/', function(req, res){
    var pathname = url.parse(req.url).pathname
    console.log(pathname);
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get('/index.html', function(req, res){
    var pathname = url.parse(req.url).pathname
    console.log(pathname);
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get('/about.html', function(req, res){
    var pathname = url.parse(req.url).pathname
    console.log(pathname);
    res.sendFile(path.join(__dirname + "/about.html"));
})

console.log('Server Running')
app.listen(3000);