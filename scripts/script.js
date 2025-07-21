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
        return "Error: Division by 0";
    }
    let res = a / b;
    if (res % 1 !== 0) {
        return (a / b).toFixed(2);
    } else {
        return a / b;
    }
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


function appendNumber(num) {
    if ((display.textContent == "0" || shouldReset) && num !== ".") {
        display.textContent = num;
        shouldReset = false;
    } else if ((display.textContent == "0" || shouldReset) && num === ".") {
        display.textContent += num;
        shouldReset = false;
    } else if (num !== "." || !display.textContent.includes(".")) {
            display.textContent += num;
    }
}

function setOperator(op) {
    if (operator !== null && !shouldReset) {
        performOperation();
    }
    num1 = display.textContent;
    operator = op;
    shouldReset = true;
}

function performOperation() {
    if (operator !== null && !shouldReset) {
        num2 = display.textContent;
        let res = operate(parseFloat(num1), parseFloat(num2), operator);
        if (res[0] === "E") {
            clear();
            display.textContent = res;
            shouldReset = true;
            return ;
        } else if (res % 1 !== 0) {
            display.textContent = parseFloat(res).toFixed(2);
        } else {
            display.textContent = res;
        }
        num1 = display.textContent;
        operator = null;
        shouldReset = true;
    }
}

function eraseNumber() {
    if (display.textContent.length === 1) {
        display.textContent = "0"
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function clear() {
    display.textContent = "0";
    num1 = null;
    num2 = null;
    operator = null;
    shouldReset = false;
}


let num1 = null;
let num2 = null;
let operator = null;
let shouldReset = false;

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

const btnDecimal = document.querySelector("#decimal-btn");

const display = document.querySelector("#calc-display");
display.textContent = "0";

const btnAdd = document.querySelector("#add-btn");
const btnSubtract = document.querySelector("#subtract-btn");
const btnMultiply = document.querySelector("#multiply-btn");
const btnDivide = document.querySelector("#divide-btn");

const btnEqual = document.querySelector("#equal-btn");

const btnErase = document.querySelector("#erase-btn");
const btnClear = document.querySelector("#clear-btn");

btn0.addEventListener("click", () => { appendNumber("0"); });
btn1.addEventListener("click", () => { appendNumber("1"); });
btn2.addEventListener("click", () => { appendNumber("2"); });
btn3.addEventListener("click", () => { appendNumber("3"); });
btn4.addEventListener("click", () => { appendNumber("4"); });
btn5.addEventListener("click", () => { appendNumber("5"); });
btn6.addEventListener("click", () => { appendNumber("6"); });
btn7.addEventListener("click", () => { appendNumber("7"); });
btn8.addEventListener("click", () => { appendNumber("8"); });
btn9.addEventListener("click", () => { appendNumber("9"); });

btnDecimal.addEventListener("click", () => { appendNumber("."); })

btnAdd.addEventListener("click", () => { setOperator("+") });
btnSubtract.addEventListener("click", () => { setOperator("-") });
btnMultiply.addEventListener("click", () => { setOperator("*") });
btnDivide.addEventListener("click", () => { setOperator("/") });

btnEqual.addEventListener("click", performOperation);

btnErase.addEventListener("click", eraseNumber);
btnClear.addEventListener("click", clear);
