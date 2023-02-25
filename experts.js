var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ONESTOP');
var dbo=mongoose.connection;
dbo.on('error', console.log.bind(console, "connection error"));
dbo.once('open',  function(){

//   exports.retrieve=function(){
   dbo.collection("expert").find({}).toArray((err,res)=>{
      console.log(res);
      res.map((samp)=>{
         console.log(samp.Name);
         x=samp.Name;
      
          });
         // var re="";
         // res.on(data,function(chunk){
         //   re+=chunk;
          //  console.log("@@@");
          //  console.log(re);
        //  var x="Name : "+res.toString();
        //  console.log(x); 
        //  document.getElementById('content').innerHTML = x;
   
     });
   //}

console.log("connection succeeded");})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
 extended: true
}));
app.post('/signup', function(req,res){
   
    var Name = req.body.Name;
    var Sender =req.body.Sender;
    var Subject = req.body.Subject;
    var Qualifications =req.body.Qualifications;
    var Message = req.body.Message;
    var Provide= req.body.Provide;

 var data = {
 "Name": Name,
 "Sender":Sender,
 "Subject":Subject,
 "Qualifications":Qualifications,
 "Message":Message,
  "Provide":Provide,
 }
 dbo.collection('expert').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Record inserted Successfully");
    
      });
    return res.redirect('http://127.0.0.1:5502/experts.html');
   })
   app.get('/',function(req,res){
                                                                                                                                                                                                                                                                                                                                     
   res.set({
    'Access-control-Allow-Origin': '*'
   });

  // return res.redirect('sign.html');
   }).listen(3002)
   console.log("server listening at port 3002");

  