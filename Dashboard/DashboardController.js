const express = require("express");
const router = express.Router();
const userdata = require("../Orders/OrdersbyUser");
const bodyparser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");


router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());



router.get("/userdetails",(req,res)=>{

    userdata.collection.find({}).toArray((err,mydata)=>{
        var date = new Date();
        var mymonth = date.getMonth()+1;
        var currdate =  mymonth+"/"+date.getDate()+"/"+date.getFullYear(); 
        var arrdata= mydata;
        for(var i=0;i<arrdata.length;i++){
            console.log("The Ordered date from the db is ");
            console.log(arrdata[i].Orderdate);
            const orderdate = new Date(arrdata[i].Orderdate);
            console.log("The Ordered date is ");
            console.log(orderdate);
            const currentdate = new Date(currdate);
            console.log("The currentdate date is ");
            console.log( currentdate );
            const diffTime = currentdate.getTime() - orderdate.getTime();
            const diffDays = diffTime / (1000 * 60 * 60 * 24); 
            arrdata[i].difference = diffDays;
        }


        res.render("Dashboardlist",{data:arrdata});
    });

});

router.post("/sendemail",(req,res)=>{

    console.log("request recieved");
    console.log(req.body.email);

    const msg = {
        to: req.body.email,
        from: "balu.shiva234@gmail.com",
        subject: "This is a test mail",
        text: "The Status of your order is"+req.body.status
    }

    sgMail.send(msg,()=>{
        console.log("Email sent to selected users");
        res.send("Email sent");
    });

});


module.exports = router;

