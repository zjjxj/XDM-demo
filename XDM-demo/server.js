var express=require('express');
var path=require('path');
var app=express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.get("/window1",function (req,res) {
    res.redirect("window1.html")
});

app.get("/window2",function (req,res) {
   res.redirect("window2.html");
});

app.listen(3000);