//first load set wins and losses to 0
//each reload
let rightGuessCounter = 0;
let wrongGuessCounter = 0;
let arrayOfPhrases = ["cat", "dog", "armadillo", "chinchilla", "fine scott you win"]
//randomly select
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomPhrase = arrayOfPhrases[getRandomInt(0,arrayOfPhrases.length)]
console.log(randomPhrase)

let arrayofChosenWords = randomPhrase.split(" ")
console.log(arrayofChosenWords)
let wordCount = arrayofChosenWords.length
console.log(wordCount)

// let totalLetterCount = function(arr){
//   let letterCounter = 0
//   for (var i = 0; i < arr.length; i++) {
//     letterCounter += arr[i].length
//   }
//   console.log(letterCounter)
//   return letterCounter
// }
// totalLetterCount(arrayofChosenWords)

//below finds unique characters
//found on stack overflow
var uniqueLetters = randomPhrase.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').split(" ").join("");
console.log(uniqueLetters)

let maxNumberOfRightGuesses = uniqueLetters.length
console.log(maxNumberOfRightGuesses)



//take user input for each letter
// let guess = alert("What letter do you want to guess")

//button on click to console log the inner html

let button = document.querySelectorAll("button")
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(e){
  e.preventDefault()
  console.log(this.innerHTML)
  guessedLetter = this.innerHTML;
})
}


//if string contains guessed letter
  //rightCount++
  //unhide div with class letter
//if string does not contain guessed letter
  //wrongCount++
  //update sprite image
//if rightCount === maxRight
  //you win
  //wins++
//if wrongCount === maxWrong
  //you lose
  //loses++

//create board of that many divs
//assign each div a class of that letter
