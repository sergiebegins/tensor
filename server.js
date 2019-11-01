var express = require('express');
const path = require('path')
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8888;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
        res.sendFile(path.join(__dirname+'/index.html'));


});

app.get('/bundle.js', function(req, res){
        res.sendFile(path.join(__dirname+'/bundle.js'));


});app.get('/imgAnalyz.js', function(req, res){
        res.sendFile(path.join(__dirname+'/imgAnalyz.js'));


});app.get('/watermark.js', function(req, res){
        res.sendFile(path.join(__dirname+'/watermark.js'));


});app.get('/proceduralWatermark.js', function(req, res){
        res.sendFile(path.join(__dirname+'/proceduralWatermark.js'));


});app.get('/noimage.png', function(req, res){
        res.sendFile(path.join(__dirname+'/assets/noimage.png'));


});

app.get('/jquery.min.js', function(req, res){
        res.sendFile(path.join(__dirname+'/jquery.min.js'));


});


server.listen(port, function () {

});


