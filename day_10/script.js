//Events in JavaScripts
const title = document.getElementById("title");
title.innerHTML = "JS Event";

//defining  result element from html
const result = document.getElementById("result");
function callMe() {
  console.log("Iam being Called");
  result.innerHTML = "This is the result";
}

//generate number

function generateValue() {
  const userInput = document.getElementById("rangeValue");
  const inputValue = userInput.value;
  console.log("User input number: " + inputValue);

  //generating random number using Math package
  const generatedResult = Math.random() * inputValue;
  console.log("Random number in decimal:" + generatedResult);

  document.getElementById("generatedDecimalValue").innerHTML =
    "Random number in decimal:" + generatedResult;

  //to get whole number convert to floor
  const resultInWholeNum = Math.floor(Math.random() * inputValue);
  console.log("Random number in whole:" + resultInWholeNum);

  document.getElementById("generatedWholeValue").innerHTML =
    "Random number in whole:" + resultInWholeNum;

  //changing button background color
  // const button = document.getElementById("button")
  // button.style.backgroundColor = rgba(resultInWholeNum, resultInWholeNum, resultInWholeNum)
}
