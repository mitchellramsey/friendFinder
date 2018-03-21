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
        //sets the incoming object at a new easier to use variable
        var userData = req.body;
        console.log(userData.scores);
        //Set totalDifference at a value that is guaranteed to be lower for our first 'friend'  a.k.a 51
        var friendDifference = 51;

        //Loop Through the friend array
        for(var i = 0; i < friendData.length; i++){
            var totalDifference = 0;
            //loop and compare new user with friend score's
            for(var j = 0; j < userData.scores.length; j++) {
                
                var userScore = parseInt(userData.scores[j]);
                // console.log(userScore);

                var friendScore = parseInt(friendData[i].scores[j]);
                // console.log(friendScore);
                if(userScore > friendScore){
                    var difference = userScore - friendScore;
                } else {
                    var difference = friendScore - userScore;
                }
                // console.log("Difference: " + difference);
                totalDifference += difference;
                // console.log("Total Difference: " + totalDifference);
            }
            if(totalDifference < friendDifference) {
                friendDifference = totalDifference;
                var matchData = friendData[i];
                
            }
        }

        friendData.push(userData);

        console.log(matchData);
        
       res.json(matchData);
        

    });

}