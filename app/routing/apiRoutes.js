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
        var userScore = userData.scores[0];
        console.log(userScore);
        console.log
        if(userScore > friendData[0].scores[0]){
            var difference = userScore - friendData[0].scores[0];
        } else {
            var difference = friendData[0].scores[0] - userScore;
        }
        console.log(difference);

    });

}