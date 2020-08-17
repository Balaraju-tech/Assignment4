
const mongoose = require("mongoose");

const userorders = new mongoose.Schema({
                            name:{type:String},
                            email:{type:String},
                            address:{type:String}
                                });

module.exports = mongoose.model("userdetails",userorders);