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
let operator;
let result;
let sign;
let displayValue;
let displayValueB;
let unrounded;

backBtn.addEventListener("click", function () {
  useBackBtn();
});

function useBackBtn() {
  if (typeof operator == "undefined") {
    numA.pop();
    console.log(numA);
    displayValue = numA.join("");
    calcResult.textContent = displayValue;
  } else if (typeof operator !== "undefined") {
    numB.pop();
    console.log(numB);
    displayValueB = numB.join("");
    calcResult.textContent = `${displayValue} ${sign} ${displayValueB}`;
  }
}

numberBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    useNumBtn(button);
  });
});

function useNumBtn(button) {
  if (typeof operator == "undefined") {
    if (numA.length < 5) {
      //want max length userNum = 4
      numA.push(button.textContent);
    }
    displayValue = numA.join("");
    calcResult.textContent = displayValue;
    console.log(`numA = ${numA}`); //join later
  } else if (typeof operator !== "undefined") {
    if (numB.length < 5) {
      numB.push(button.textContent);
      displayValueB = numB.join("");
    }
    console.log(`numB = ${numB}`); //join later
    calcResult.textContent = `${displayValue} ${sign} ${displayValueB}`;
  }
}

decimalBtn.addEventListener("click", function () {
  useDecimalBtn();
});

function useDecimalBtn() {
  if (typeof operator == "undefined") {
    numA.push(decimalBtn.textContent);
    displayValue = numA.join("");
    calcResult.textContent = displayValue;
  } else if (typeof operator !== "undefined") {
    numB.push(decimalBtn.textContent);
    displayValueB = numB.join("");
    calcResult.textContent = `${displayValue} ${sign} ${displayValueB}`;
  }
}

getOperator();

function useOperatorBtn(button) {
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
}

function getOperator() {
  operatorBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      useOperatorBtn(button);
    });
  });
}

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

function calculate() {
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
    unrounded = add(numA, numB);
    getroundedNum();
  } else if (operator == "subtraction") {
    console.log("subtraction");
    unrounded = subtract(numA, numB);
    getroundedNum();
  } else if (operator == "multiplication") {
    console.log("multiplication");
    unrounded = multiply(numA, numB);
    getroundedNum();
  } else if (operator == "division") {
    console.log("division");
    unrounded = divide(numA, numB);
    getroundedNum();
  }
  calcResult.textContent = result;
  numA = result;
  displayValue = result;
  reset();
  return console.log(result);
}

function getroundedNum() {
  let toRound = unrounded.toString().length;
  console.log(toRound);
  if (toRound >= 7) {
    unrounded = unrounded.toFixed(5);
  }
  result = unrounded;
  return result;
}
