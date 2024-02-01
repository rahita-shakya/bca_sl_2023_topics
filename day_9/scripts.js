const title = document.getElementById("title");

title.innerHTML = "JS Event";

// defining result element from html
const result = document.getElementById("result");

function callMe() {
  console.log("I am being called");
  result.innerHTML = "I am being called";
}

// generate number
// let userInput = document.getElementById("rangeValue")
// let inputValue = userInput.value

function generateValue() {
  let userInput = document.getElementById("rangeValue");
  let inputValue = userInput.value;
  console.log("User input number: " + inputValue);

  // generating random number using math package
  const generatedResult = Math.random() * inputValue;
  console.log("Random number in decimal: " + generatedResult);

  document.getElementById("randomnum").innerHTML =
    "Random NUmber in decimal: " + generatedResult;

  // to get whole number convert to floor
  const resultInWholeNum = Math.floor(Math.random() * inputValue);
  console.log("Random number in whole: " + resultInWholeNum);

  document.getElementById("generatedWholeValue").innerHTML =
    "Random number in whole: " + resultInWholeNum;
}
