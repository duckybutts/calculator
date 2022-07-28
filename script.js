let addition = document.querySelector(".plus");
let subtraction = document.querySelector(".minus");
let multiplication = document.querySelector(".mult");
let division = document.querySelector(".divide");
let numberBtn = document.querySelectorAll(".number");
let operatorBtn = document.querySelectorAll(".operator");
let computeBtn = document.querySelector(".equals");
let decimalBtn = document.querySelector(".decimal");
let calcResult = document.querySelector(".results");
let clearBtn = document.querySelector(".clear");
let backBtn = document.querySelector(".back");

let numA = [];
let numB = [];
let operator, result, sign, displayValue, displayValueB, unrounded;

numberBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    if (typeof operator == "undefined") {
      if (numA.length < 5) {
        numA.push(button.textContent);
      }
      displayValue = numA.join("");
      calcResult.textContent = displayValue;
    } else if (typeof operator !== "undefined") {
      if (numB.length < 5) {
        numB.push(button.textContent);
        displayValueB = numB.join("");
      }
      calcResult.textContent = `${displayValue} ${sign} ${displayValueB}`;
    }
  });
});

getOperator();

function getOperator() {
  operatorBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      if (operator !== undefined) {
        calculate();
      }
      if (button.textContent == "+") {
        calcResult.textContent = `${displayValue} +`;
        operator = "addition";
        sign = "+";
      } else if (button.textContent == "-") {
        calcResult.textContent = `${displayValue} -`;
        operator = "subtraction";
        sign = "-";
      } else if (button.textContent == "x") {
        calcResult.textContent = `${displayValue} x`;
        operator = "multiplication";
        sign = "x";
      } else if (button.textContent == "/") {
        calcResult.textContent = `${displayValue} /`;
        operator = "division";
        sign = "/";
      }
      return console.log(operator);
    });
  });
}

function calculate() {
  if (typeof numA == "object") {
    numA = numA.join("");
  }
  numA = parseFloat(numA);
  numB = numB.join("");
  numB = parseFloat(numB);

  if (operator == "addition") {
    unrounded = add(numA, numB);
    getroundedNum();
  } else if (operator == "subtraction") {
    unrounded = subtract(numA, numB);
    getroundedNum();
  } else if (operator == "multiplication") {
    unrounded = multiply(numA, numB);
    getroundedNum();
  } else if (operator == "division") {
    unrounded = divide(numA, numB);
    getroundedNum();
  }
  calcResult.textContent = result;
  numA = result;
  displayValue = result;
  reset();
  return console.log(result);
}

backBtn.addEventListener("click", function () {
  if (typeof operator == "undefined") {
    numA.pop();
    displayValue = numA.join("");
    calcResult.textContent = displayValue;
  } else if (typeof operator !== "undefined") {
    numB.pop();
    displayValueB = numB.join("");
    calcResult.textContent = `${displayValue} ${sign} ${displayValueB}`;
  }
});
decimalBtn.addEventListener("click", function () {
  if (typeof operator == "undefined") {
    numA.push(decimalBtn.textContent);
    displayValue = numA.join("");
    calcResult.textContent = displayValue;
  } else if (typeof operator !== "undefined") {
    numB.push(decimalBtn.textContent);
    displayValueB = numB.join("");
    calcResult.textContent = `${displayValue} ${sign} ${displayValueB}`;
  }
});

computeBtn.addEventListener("click", calculate);

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
  if (b == 0) {
    return "ERROR";
  } else return a / b;
};

clearBtn.addEventListener("click", function () {
  reset();
  result = [];
  numA = [];
  displayValue = [];
  calcResult.textContent = "";
});

function reset() {
  numB = [];
  operator = undefined;
}
function getroundedNum() {
  let toRound = unrounded.toString().length;
  if (toRound >= 7) {
    unrounded = unrounded.toFixed(5);
  }
  result = unrounded;
  return result;
}
