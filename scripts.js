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
let contents = '';

const nums = '0123456789'
const operators = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
}

function operate(a, operator, b) {
    return window[operator](a, b)
}

const allButtons = document.querySelectorAll('button')
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clicked = getButtonText(button);
        if (clicked === 'C') {
            clear()
        }
        if (nums.includes(clicked)) {
            updateDisplay(clicked);
            if (operator == undefined) {
                x.push(clicked);
            }
            else {
                y.push(clicked);
            }
        }
        else if (clicked in operators) {
            updateDisplay(clicked);
            operator = getButtonId(button);
        }
        else if (clicked === '=') {
            let result = runCurrentCalculation();
            displayFinal(result)
            prepareNextCalculation(result);
        }
    })
})

function getButtonText(btn) {
    return btn.textContent
}

function getButtonId(btn) {
    return btn.id
}

function runCurrentCalculation() {
    let num1 = Number(x.join(''));
    let num2 = Number(y.join(''));
    let total = operate(num1, operator, num2);
    return Math.round((total + Number.EPSILON) * 100) / 100
}

function prepareNextCalculation(prevResult) {
    x = String(prevResult).split('');
    operator = undefined;
    y = [];
    contents = prevResult;
}

function updateDisplay(btnClicked) {
    const display = document.getElementById('display-screen');
    contents += btnClicked;
    display.textContent = contents;
}

function displayFinal(result) {
    const display = document.getElementById('display-screen');
    display.textContent = result
}

function clear() {
    location.reload()
}