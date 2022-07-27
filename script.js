let addition = document.querySelector(".plus");
let subtraction = document.querySelector(".minus");
let multiplication = document.querySelector(".mult");
let division = document.querySelector(".divide");
let numberBtn = document.querySelectorAll(".number");
let operatorBtn = document.querySelectorAll(".operator");
let computeBtn = document.querySelector(".equals");
let userInput = document.querySelector(".calcScreen");
let calcResult = document.querySelector(".resultScreen");

let numA = [];
let numB = [];
let operator;
let result;

numberBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    if (typeof operator == "undefined") {
      if (numA.length < 4) {
        //want max length userNum = 4
        numA.push(button.textContent);
      }
      console.log(`numA = ${numA}`); //join later
    } else if (typeof operator !== "undefined") {
      if (numB.length < 4) {
        //want max length userNum = 4
        numB.push(button.textContent);
      }
      console.log(`numB = ${numB}`); //join later
    }
  });
});

getOperator();

function getOperator() {
  operatorBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.textContent == "+") {
        operator = "addition";
      } else if (button.textContent == "-") {
        operator = "subtraction";
      } else if (button.textContent == "x") {
        operator = "multiplication";
      } else if (button.textContent == "/") {
        operator = "division";
      }
      return console.log(operator);
    });
  });
}

computeBtn.addEventListener("click", function operate() {
  if (typeof numA == "object") {
    numA = numA.join("");
  }
  numA = parseFloat(numA);
  console.log(numA);
  numB = numB.join("");
  numB = parseFloat(numB);
  console.log(numB);

  if (operator == "addition") {
    console.log("addition");
    result = add(numA, numB);
  } else if (operator == "subtraction") {
    console.log("subtraction");
    result = subtract(numA, numB);
  } else if (operator == "multiplication") {
    console.log("multiplication");
    result = multiply(numA, numB);
  } else if (operator == "division") {
    console.log("division");
    result = divide(numA, numB);
  }
  calcResult.textContent = result;
  numA = result;
  numB = [];
  return console.log(result);
});

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
