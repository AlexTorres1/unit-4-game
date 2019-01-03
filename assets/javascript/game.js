
//All the necessary variables to store to the info
var number = Math.floor((Math.random() * 100) + 20);
var jewelOne = Math.floor((Math.random() * 20) + 2);
var jewelTwo = Math.floor((Math.random() * 20) + 2);
var jewelThree = Math.floor((Math.random() * 20) + 2);
var jewelFour = Math.floor((Math.random() * 20) + 2);
var losses = 0;
var wins = 0;
var yourScore = 0;

//audio variable
var winner = document.getElementById("tada")
var looser = document.getElementById("youLose")

//To write to the page the score-losses-wins
$("#yourScore").text(yourScore);
$("#losses").text(losses);
$("#wins").text(wins);

$("#startGame").on("click", function(){
    startGame();
});

//Function to start the game
function startGame(){
$("#number").text(number);

console.log(jewelOne);
console.log(jewelTwo);
console.log(jewelThree);
console.log(jewelFour);
console.log(number)
};

//Created the jewel clicks.  Wanted to bring this down to a single function but have had trouble getting it to work.  
$("#jewel").on("click", function(){     
    updateScore(jewelOne); 
});

$("#jewel1").on("click", function(){     
    updateScore(jewelTwo); 
});

$("#jewel2").on("click", function(){     
    updateScore(jewelThree); 
});

$("#jewel3").on("click", function(){     
    updateScore(jewelFour); 
});

//Added audio to winner and loser
function winnerAudio(){
    winner.play();
}

function looserAudio(){
    looser.play();
}
//Created a modal to popup after a win/lose
function popup(){
    $( "#myModal" ).modal();
}

function lostPopup(){
    $( "#lostModal" ).modal();
}

//Function to update the score-losses-wins and bring up the popup-audio and reset
function updateScore (jewelCount){
    yourScore += jewelCount;
    $("#yourScore").text(yourScore);
   
    if(yourScore === number ){
        
        winnerAudio();
        wins++;        
        $("#wins").text(wins);
        popup();
        reset();
    }
    else if(yourScore > number){
        looserAudio();
        losses++;
        $("#losses").text(losses);
        lostPopup();
        reset();
    }
}

//Reset function
function reset(){
    
    number = Math.floor((Math.random() * 20) + 2);
    $("#number").text(number);
    jewelOne = Math.floor((Math.random() * 5) + 1);
    jewelTwo = Math.floor((Math.random() * 5) + 1);
    jewelThree = Math.floor((Math.random() * 5) + 1);
    jewelFour = Math.floor((Math.random() * 5) + 1);
    yourScore = 0;
    $("#yourScore").text(yourScore);

}
