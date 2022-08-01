function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiple (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b)
{
    return operator(a,b);
}

const input = document.getElementById('input-text');
const btnOne = document.getElementById('1-button');
const btnTwo = document.getElementById('2-button');
const btnThree = document.getElementById('3-button');
const btnFour = document.getElementById('4-button');
const btnFive = document.getElementById('5-button');
const btnSix = document.getElementById('6-button');
const btnSeven = document.getElementById('7-button');
const btnEight = document.getElementById('8-button');
const btnNine = document.getElementById('9-button');
const btnPlus = document.getElementById('plus-button');
const btnMinus = document.getElementById('minus-button');
const btnMult = document.getElementById('multiply-button');
const btnDiv = document.getElementById('divide-button');
const btnEquals = document.getElementById('equal-button');

const btnNumbers = document.getElementsByClassName('number');
const btnOperators = document.getElementsByClassName('operator');

for (const btn of btnNumbers)
{
    btn.addEventListener('click', enterNumber);
}

for (const btn of btnOperators)
{
    btn.addEventListener('click', enterOperator);
}

function enterNumber () {
    input.value += this.textContent;
}

function enterOperator () {
    input.value += " " + this.textContent + " ";
}