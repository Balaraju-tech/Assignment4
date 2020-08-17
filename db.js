const mongoose = require("mongoose");
const chalk = require("chalk");

const url = "mongodb://localhost:27017/local"

mongoose.connect(url,()=>{
    console.log(chalk.green("DataConnection Successful"));
});