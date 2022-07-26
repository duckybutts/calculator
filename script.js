let addition = document.querySelector(".plus");
let subtraction = document.querySelector(".minus");
let multiplication = document.querySelector(".mult");
let division = document.querySelector(".divide");
let numberBtn = document.querySelectorAll(".number");
let operatorBtn = document.querySelectorAll(".operator");

let numA = [];
let numB = [];
let operator;

getOperator();

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
      return operator;
    });
  });
}

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }
