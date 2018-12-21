var number = Math.floor(Math.random() * 100);
var usertotal = 0;
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

$(".jewel").on("click", function(){     
    ///*assignNumber();
    $("#yourScore").text(yourScore);
    console.log();
});

