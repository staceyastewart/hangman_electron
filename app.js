$(document).ready(function() {
let hangman = $(".hangman")
let rightGuessCounter = 0;
let wrongGuessCounter = 0;
let arrayOfPhrases = ["cat", "dog", "armadillo", "chinchilla", "Matz is nice so we are nice", "Ruby on Rails", "Ottawa Canada", "Beijing China", "Jazz", "Rhythm", "JavaScript", "Stacey", "Laura", "Scott"]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomPhrase = arrayOfPhrases[getRandomInt(0,arrayOfPhrases.length)].toUpperCase()

let wordOnPage = $(".randomWord");
let appendLetters = function(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " "){
      wordOnPage.append("<div class='spaceOnPage'>  </div>");
    } else {
    wordOnPage.append("<div class='letterOnPage' id='"+ i +"'>" + str[i] + "</div>");
    }
  }
}
appendLetters(randomPhrase);

//below finds unique characters --- found on stack overflow
var uniqueLetters = randomPhrase.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').split(" ").join("");

let button = document.querySelectorAll("button")

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(e){
  e.preventDefault()
  if(this.className != "clicked"){
    guessedLetter = this.innerHTML;
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
        $(".gameOutcome").text("YOU WON!")
        for (var i = 0; i < randomPhrase.length; i++) {
          randomPhrase[i]
        }
        for (var i = 0; i < button.length; i++) {
          button[i].setAttribute("class", "clicked")
        }
      }
    } else{
      wrongGuessCounter++;
      hangman.attr('class', `hangman${wrongGuessCounter}`);
      if (wrongGuessCounter === 6){
        $(".gameOutcome").text("YOU LOST!")
        for (var i = 0; i < button.length; i++) {
          button[i].setAttribute("class", "clicked")
        }
      }
    }
  }
})
}


}); //JQUERY closure
