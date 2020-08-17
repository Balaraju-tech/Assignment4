const express = require("express");

const router = express.Router();
const bodyparser = require("body-parser");
const userdb = require("./OrdersbyUser");
var userdetailsfromdb;
router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());
// var usercollect = userdb();

router.post("/save",(req,res)=>{

    console.log("Entered DB of Router Post of OrderController");

    userdb.findOne({"email":req.body.Email},(err,data)=>{
        if(err) throw err;
        var username = req.body.username;
        var email = req.body.Email;
        var address = req.body.address;
        var cutters = req.body.cutters;
        var table = req.body.table;
        var glasses = req.body.glasses;
        var watches = req.body.watch;
        var dateoforder = new Date();
        var date = dateoforder.getDate();
        var month = dateoforder.getMonth()+1;
        var year = dateoforder.getFullYear();

        var currentdate = month+"/"+date+"/"+year;
         console.log();

        if(data==null){
            console.log("The data is not present in the DB");

            userdb.collection.insert({name:username,email:email,address:address,"cutters":cutters,
            "table": table,"glasses":glasses,watches:watches,Orderdate:currentdate},(err,data)=>{
                    console.log("Data is inserted succesfully");
                    console.log(data.ops[0]);
                    res.send("<h1>Your data has been saved<h1>");
            })

        }
        else{
            console.log("The Data of Watches is ",cutters);
            var dbemail = data.email;
            userdb.collection.update({email:dbemail},{$set:{"name":username,"address":address,
                "cutters":cutters,"table": table,"glasses": glasses,watches:watches,Orderdate:currentdate}},(err,data)=>{
                    console.log("Data is updated ");
                    res.send("Your data is updated successfully");
                });
                

        }

    });
    

});


module.exports = router;
