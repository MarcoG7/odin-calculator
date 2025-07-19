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

let num1 = 0;
let num2 = 0;
let operation = "";

let x = prompt("x = ");
let y = prompt("y = ");
console.log(`${x} + ${y} = ${add(x, y)}`);
console.log(`${x} - ${y} = ${subtract(x, y)}`);
console.log(`${x} * ${y} = ${multiply(x, y)}`);
console.log(`${x} / ${y} = ${divide(x, y)}`);