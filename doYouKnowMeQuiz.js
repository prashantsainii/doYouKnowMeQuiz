var readlineSync = require('readline-sync');

var score = 0;
var playerName = readlineSync.question("Hey!! What's your name ?\n");

var questions = [{
    question : "Which college I graduated from ?\n",
    answer: "KIET"
  }, {
    question: "Which domain I was from ?\n",
    answer: "Electrical"
  }, {
    question: "Which is my dream MNC\n",
    answer: "Microsoft"
  }, {
    question: "Which is my favourite web series ?\n",
    answer: "GOT"
  }, {
    question: "What's my favourite street food\n",
    answer: "Spring rolls"
  }, {
    question: "What's my favourite thing to do in free time\n",
    answer: "Watch eSports"
  }, {
    question: "Which is my favourite game to play\n",
    answer: "COC"
  }, {
    question: "Do I love outing ?\n",
    answer: "No"
  }, {
    question: "Do I have lot of friends\n",
    answer: "No"
  }, {
    question: "I am a big fan of which actor?\n",
    answer: "Hrithik Roshan"
  }];
var highScore = [{
  playerName : "FakeFriend",
  playerScore : "2"
  },{
  playerName : "BestFriend",
  playerScore : "3"
  }
];

function showLeaderBoard(){
  console.log("\nCheckout Leaderboard -->")
  for(var i=highScore.length - 1; i>=0; i--){
    console.log(highScore[i].playerName + " : " + highScore[i].playerScore);
  }
}

function showScore(){
  console.log("Your final score is : " + score);
  if(score > highScore[highScore.length - 1].playerScore){
    console.log("Congratulations. You beat the High Score");
    highScore.push({playerName: playerName, playerScore : score})
  }
  showLeaderBoard();
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("Correct Answer :)");
  }
  else{
    console.log("Wrong Answer :(");
  } 
}

function game(){
  console.log("\nLet's Begin !!\n");
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
    if(i != questions.length - 1) console.log("Score : " + score + "\n-----------------\n");
    else console.log();
  }
  showScore();
  var again = readlineSync.question("\nPress A to play again\n");
  if(again.toUpperCase() == "A"){
    score = 0;
    game();
  }
  else console.log("\nThanks for joining");
}

function welcome(){
  return playOrNot = readlineSync.question("Welcome " + playerName + ". How well do your know me? Let's find out.\nPress P to play\n");
}

var userWish = welcome();
if(userWish.toUpperCase() === "P") game();
else console.log("Thanks for passing by. Have a good day :)");