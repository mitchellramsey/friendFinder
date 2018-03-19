// Load Data
//====================================================
var friendData = require("../data/friends");


//Routes
//====================================================
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
        
        
        var userData = req.body;
        console.log(userData);
        console.log(friendData[0]);
        if(userData.scores[0] > friendData[0].scores[0]){
            var difference = userData.scores[0] - friendData.scores[0];
        } else {
            var difference = friendData.scores[0] - userData.scores[0];
        }
        console.log(difference);

    });

}