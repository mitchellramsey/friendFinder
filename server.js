//Dependencies
//===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Express Configuration
//===========================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/app/public/')));

//app.use is used to execute middleware functions. What does that mean? Think of middleware functions as the prep steps before YOU handle the request yourself with your route. app.use will do sequential steps of processing, running the request through the middleware one "use" at a time. But when do these steps get processed, just the first time when you load your app? No! 
//app.use has a default behavior. The default behavior says to run the middleware functions on every path that starts with "/"...but wait a sec, thats every single request! So if you want to say...parse the request with bodyparser, and intelligently manage a static folder with express.static BEFORE you handle the response, the order matters!


//more info http://expressjs.com/en/api.html#app.use
//side note, notice how app.use takes a function with 3 params in the docs. Why don't we pass it a function with 3 params like in the docs? Well actually we are passing a function and then executing that function. What probably gets RETURNED from that function is something that
//resembles the function with the 3 params.

//Required files to read Routes
//============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Starts the server to begin listening
//============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});