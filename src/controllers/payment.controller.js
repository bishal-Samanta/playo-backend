
const express = require("express");
const curdController = require("./curd.controller");
const router = express.Router();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: 'rzp_test_YRchQmUUNwRgXd',
    key_secret: 'Cmbhy7UIuBuvGv3543s37IGx',
})

var orderid ;

router.post("/create" , (req, res)=>{
    let options = {
        amount: req.body.price,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    }

    razorpay.orders.create(options , (err, order)=>{
        //console.log(order)
        orderid = order.id;
        res.json(order)
    })

})



router.post("/status" , (req, res) =>{

    razorpay.payments.fetch(req.body.razorpay_payment_id).then((document) =>{
        console.log(document)
        if(document.status == "captured"){
            res.send("Payment Success");
            
        }
        else{
            res.send("Payment Not Success");
        }
        
    })
    


})


module.exports = router
