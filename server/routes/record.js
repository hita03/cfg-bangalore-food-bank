const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");
const testroute = require("../routes/record")
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const app = express();
const recordRoutes = express.Router();

 
// This will help us connect to the database
const dbo = require("../db/connection/connection")
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 

// This section will help you get a list of all the records.
recordRoutes.route("/").get(function (req, res) {
 let db_connect = dbo.getDb("codebrewers");
 db_connect
   .collection("test")
   .find({})
   .toArray(function (err, result) {
     if (err) console.log(err);
     res.json(result);
   });
});


// This section will help you create a new record.
recordRoutes.route("/login").post(function (req, response) {
  // console.log(req,response);
  username=req.body.username
  password=req.body.password
  let db_connect = dbo.getDb("codebrewers");
  db_connect
   .collection("auth")
   .find({})
   .toArray(function (err, res) {
     if (err) console.log(err);
      console.log(res)
      response.json(res);

        // if(username===ele['username']){
        //   if(password===ele['password']){
        //     console.log("Successful Login")
        //     res.json("1")
        //   }
        // }
        
     })
   });

 recordRoutes.route("/register").post(function (req, response) {
  // console.log(req,response);
  let db_connect = dbo.getDb("codebrewers");
  let obj = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    number: req.body.number,
    donations:0,

  };
  db_connect.collection("auth").insertOne(obj, function (err, res) {
    if (err) throw err;
    console.log(res);
    response.json(res);
  });
 }); 


 recordRoutes.route("/addcart").get(function (req, res) {
  // console.log(req,response);
  let db_connect = dbo.getDb("codebrewers");
  db_connect
   .collection("auth")
   .find({})
   .toArray(function (err, result) {
     if (err) console.log(err);
     console.log(result);
   });
 }); 


 // This section will help you update a record by id.
recordRoutes.route("/addcart").post(function (req, response) {
  let id='62b5f2d15bbc0c0fb923e46c';
  console.log("req body",req.body);
  console.log("req params",req.params.donations);
  let myquery = { _id: new ObjectId(id)}; 
  let db_connect = dbo.getDb("codebrewers"); 

  db_connect
   .collection("auth")
   .updateOne(myquery,{$set: {    
    donations: req.body.donations
   } }     
  )
 });

 recordRoutes.route("/payment").post(function (req, response) {
   // console.log(req,response);
   let db_connect = dbo.getDb("codebrewers");
   let obj = {
     name: req.body.username,
     email: req.body.password,
     cardnumber: req.body.email,
     expiry: req.body.number,
     cvv:0,
 
   };
   db_connect.collection("payment").insertOne(obj, function (err, res) {
     if (err) throw err;
     console.log(res);
     response.json(res);
   });
 });

module.exports = recordRoutes;
