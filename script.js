function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function remainder (a, b)
{
    return a % b;
}

function operate (a, operator, b)
{
    return operator(Number(a),Number(b));
}

let numberofOperators = 0;
const input = document.getElementById('input-text');
const btnClear = document.getElementById('c-button');
const btnEquals = document.getElementById('equal-button');
const btnNumbers = document.getElementsByClassName('number');
const btnOperators = document.getElementsByClassName('operator');

btnClear.addEventListener('click', function () {
    input.value = "";
    numberofOperators = 0;
})

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
    if (numberofOperators >= 1)
    {
        getResult(input.value);
    }
    numberofOperators++;
    input.value += " " + this.textContent + " ";
}

btnEquals.addEventListener('click', function () {
    getResult(input.value);
});

function getResult(text) {
    let arr = text.split(' ');
    if (numberofOperators == 0)
    {
        input.value = arr[0];
    }
    else {
        input.value = operate(arr[0], getOperator(arr[1]), arr[2]);
        idiotVerification(arr[1], arr[2]);
    }
    numberofOperators = 0;

}

function getOperator(text) {
    switch (text) {
        case "+": return add;
        case "−": return subtract;
        case "×": return multiply;
        case "÷": return divide;
        case "%": return remainder;
    }
}

function idiotVerification (a, b)
{
    if ((a == "÷" || a == "%") && b == "0")
    {
        window.open('https://www.youtube.com/watch?v=gDjMZvYWUdo', '_blank').focus();
        input.value = "0";
    }
}