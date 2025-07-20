function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) { 
        console.log(">> Cannot divide by 0");
    }
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            break;
    }
}





let num1 = "0";
let num2 = "0";
let operation = "";

const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");

const display = document.querySelector("#calc-display");
display.textContent = "0";

const btnAdd = document.querySelector("#add-btn");
const btnSubtract = document.querySelector("#subtract-btn");
const btnMultiply = document.querySelector("#multiply-btn");
const btnDivide = document.querySelector("#divide-btn");
const btnEqual = document.querySelector("#equal-btn");

btn0.addEventListener("click", () => { addToDisplay("0"); });
btn1.addEventListener("click", () => { addToDisplay("1"); });
btn2.addEventListener("click", () => { addToDisplay("2"); });
btn3.addEventListener("click", () => { addToDisplay("3"); });
btn4.addEventListener("click", () => { addToDisplay("4"); });
btn5.addEventListener("click", () => { addToDisplay("5"); });
btn6.addEventListener("click", () => { addToDisplay("6"); });
btn7.addEventListener("click", () => { addToDisplay("7"); });
btn8.addEventListener("click", () => { addToDisplay("8"); });
btn9.addEventListener("click", () => { addToDisplay("9"); });

btnAdd.addEventListener("click", () => { setOperation("+") });
btnSubtract.addEventListener("click", () => { setOperation("-") });
btnMultiply.addEventListener("click", () => { setOperation("*") });
btnDivide.addEventListener("click", () => { setOperation("/") });

btnEqual.addEventListener("click", performOperation);
