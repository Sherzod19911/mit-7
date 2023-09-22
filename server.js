console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//-------------------1------------------//
 app.use(express.static("public"));
 app.use(express.json());
app.use(express.urlencoded({extended: true }));

//------------------2--------------//



//-------------------------3-------------//
app.set("views","views");
app.set("view engine","ejs");

//--------------------------4-----------------//
app.get("/", function(req, res) {
    res.end("hello world");
});

 const server = http.createServer(app);
 let PORT = 3000;
 server.listen(PORT, function() {
 console.log(`server is running succssfully on port: ${PORT}`)
 });
