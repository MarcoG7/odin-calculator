function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

let x = prompt("x = ");
let y = prompt("y = ");
console.log(`${x} + ${y} = ${add(x, y)}`);
console.log(`${x} - ${y} = ${subtract(x, y)}`);