var mongoose=require('mongoose');
var Customer = require('./customer')

mongoose.connect("mongodb://localhost:27017/nermin",(error)=>{
    if(!error){
        console.log("ok")
    }
})

var customer1=new Customer({name:"kenan DEMirli",city:"Baki"})

customer1.save((error)=>{
    if(error){
        throw error;
    }
    console.log("Saved")
})