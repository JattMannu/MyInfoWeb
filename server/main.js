const express = require('express');


var app = new express();

app.get('/', function(req , res){
    res.render('./../app/index.ejs',{});
})
.use(express.static(__dirname+'./../.tmp'))
.use(express.static(__dirname+'./../node_modules/highlight.js/styles')) //Added this line for highlight code snippnet
.listen(9999);

