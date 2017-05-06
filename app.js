$(document).ready(function() {

let body = $("body")
let hangman = $(".hangman")
let wins=0;
let losses=0;


//first load set wins and losses to 0
//each reload
let rightGuessCounter = 0;
let wrongGuessCounter = 0;
let arrayOfPhrases = ["cat", "dog", "armadillo", "chinchilla", "fine scott you win"]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


let randomPhrase = arrayOfPhrases[getRandomInt(0,arrayOfPhrases.length)]
console.log(randomPhrase)

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

// let arrayofChosenWords = randomPhrase.split(" ")
// console.log(arrayofChosenWords)
// let wordCount = arrayofChosenWords.length
// console.log(wordCount)

//below finds unique characters
//found on stack overflow
var uniqueLetters = randomPhrase.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').split(" ").join("");
console.log(uniqueLetters)

let maxNumberOfRightGuesses = uniqueLetters.length
console.log(maxNumberOfRightGuesses)

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
      }
    } else{ //you guessed wrong
      wrongGuessCounter++;
      hangman.attr('class', `hangman${wrongGuessCounter}`);
      if (wrongGuessCounter === 6){
        console.log("YOU LOSE SIR!")
        losses++;
      }
    }
  }
})
}

let reset = function(){
  rightGuessCounter=0;
  wrongGuessCounter=0;
  hangman.attr('class', 'hangman');
  let randomPhrase = arrayOfPhrases[getRandomInt(0,arrayOfPhrases.length)]
}








  //update sprite image

//create board of that many divs
//assign each div a class of that letter



}); //JQUERY closure
