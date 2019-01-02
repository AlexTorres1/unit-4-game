
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




$("#yourScore").text(yourScore);
$("#losses").text(losses);
$("#wins").text(wins);

$("#startGame").on("click", function(){
    startGame();
});

function startGame(){
$("#number").text(number);

console.log(jewelOne);
console.log(jewelTwo);
console.log(jewelThree);
console.log(jewelFour);
console.log(number)
};


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

function winnerAudio(){
    winner.play();
}

function looserAudio(){
    looser.play();
}

function popup(){
    $( "#myModal" ).modal();
}

function lostPopup(){
    $( "#lostModal" ).modal();
}

function updateScore (jewelCount){
    yourScore += jewelCount;
    $("#yourScore").text(yourScore);
   
    if(yourScore === number ){
        
        winnerAudio();
        wins++;        
        $("#wins").text(wins);
        //alert("Winner!!!");
        popup();
        reset();
    }
    else if(yourScore > number){
        looserAudio();
        losses++;
       //alert("Sorry, you lose.  Try again!");
        $("#losses").text(losses);
        //alert("Sorry, you lose.  Try again!");
        lostPopup();
        reset();
    }
}



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
