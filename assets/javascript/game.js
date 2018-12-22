
var number = Math.floor((Math.random() * 100) + 20);

var jewelOne = Math.floor((Math.random() * 20) + 2);
var jewelTwo = Math.floor((Math.random() * 20) + 2);
var jewelThree = Math.floor((Math.random() * 20) + 2);
var jewelFour = Math.floor((Math.random() * 20) + 2);
var losses = 0;
var wins = 0;
var yourScore = 0;

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

/*function assignNumber(assign){
    assign = Math.floor((Math.random() * 20) + 2);
    //console.log(assign);
}*/

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

function updateScore (jewelCount){
    yourScore += jewelCount;
    $("#yourScore").text(yourScore);
   
    if(yourScore === number ){
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else if(yourScore > number){
        losses++;
        $("#losses").text(losses);
        reset();
    }
}

function reset(){
    
    number = Math.floor((Math.random() * 100) + 20);
    $("#number").text(number);
    jewelOne = Math.floor((Math.random() * 20) + 2);
    jewelTwo = Math.floor((Math.random() * 20) + 2);
    jewelThree = Math.floor((Math.random() * 20) + 2);
    jewelFour = Math.floor((Math.random() * 20) + 2);
    yourScore = 0;
    $("#yourScore").text(yourScore);

}
