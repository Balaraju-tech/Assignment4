const express = require("express");
const app = require("./app");

const chalk = require("chalk");
// const process = require("Process");

const port = 8080;
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static(__dirname+'/public'));

app.get("/",(req,res)=>{

    res.render('Orderlist');

});



app.listen(port,()=>{
    console.log("App is running on port %s",port);
})