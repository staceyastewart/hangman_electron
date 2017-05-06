$(document).ready(function() {

let body = $("body")
let hangman = $(".hangman")
let wins=0;
let losses=0;

let rightGuessCounter = 0;
let wrongGuessCounter = 0;
let arrayOfPhrases = ["cat", "dog", "armadillo", "chinchilla", "fine scott you win"]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomPhrase = arrayOfPhrases[getRandomInt(0,arrayOfPhrases.length)]

let wordOnPage = $(".randomWord");
let appendLetters = function(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " "){
      wordOnPage.append("<div class='spaceOnPage'>  </div>");
    } else {
    wordOnPage.append("<div class='letterOnPage' id='"+ i +"'>" + str[i]+ "</div>");
    }
  }
}
appendLetters(randomPhrase);

//below finds unique characters
//found on stack overflow
var uniqueLetters = randomPhrase.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').split(" ").join("");

// let maxNumberOfRightGuesses = uniqueLetters.length

let button = document.querySelectorAll("button")
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(e){
  e.preventDefault()
  if(this.className != "clicked"){
    guessedLetter = this.innerHTML.toLowerCase();
    this.setAttribute("class", "clicked");

    if(uniqueLetters.includes(guessedLetter)){
      rightGuessCounter++;
      for (var i = 0; i < randomPhrase.length; i++) {
        let id = $(`#${i}`)
        if(id.text() === guessedLetter){
          id.toggleClass("correctGuess")
        }
      }
      if(rightGuessCounter === uniqueLetters.length){
        wins++;
        console.log(wins)
        reset();
      }
    } else{
      wrongGuessCounter++;
      hangman.attr('class', `hangman${wrongGuessCounter}`);
      if (wrongGuessCounter === 6){
        console.log("YOU LOSE SIR!")
        losses++;
        console.log(losses)
        reset()
      }
    }
  }
})
}

let reset = function(){
  console.log("TESTER")
  rightGuessCounter=0;
  wrongGuessCounter=0;
  hangman.attr('class', 'hangman');
  clearLetters();
  let randomPhrase = arrayOfPhrases[getRandomInt(0,arrayOfPhrases.length)];
  appendLetters(randomPhrase);
}

let clearLetters = function(){
  let clickedButtons = $("#clicked");
  clickedButtons.removeClass().attr("class","button");
  for (var i = 0; i < randomPhrase.length; i++) {
      let id = $(`#${i}`);
      id.remove();
    }
}

}); //JQUERY closure
