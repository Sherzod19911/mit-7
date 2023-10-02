const http = require("http");
//const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://sherzod91:EbcacTEqYxHdu04g@cluster0.isc9quy.mongodb.net/Reja";

mongodb.connect(
    connectionString, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        },
        ( err, client) => {
    if(err) console.log("Error on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        //console.log(client);
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4000;
        server.listen(PORT, function () {
         console.log(
             `The server is running succssfully on port: ${PORT}, http://localhost:${PORT}`
               );
             });
         }
    }
);


