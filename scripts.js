function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

let x = [];
let operator;
let y = [];

function operate(a, operator, b) {
    return operator(a, b)
}