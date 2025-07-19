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

let num1 = 0;
let num2 = 0;
let operation = "";

num1 = prompt("num1 = ");
num2 = prompt("num2 = ");
console.log(`${num1} + ${num2} = ${operate(num1, num2, "+")}`);
console.log(`${num1} - ${num2} = ${operate(num1, num2, "-")}`);
console.log(`${num1} * ${num2} = ${operate(num1, num2, "*")}`);
console.log(`${num1} / ${num2} = ${operate(num1, num2, "/")}`);