//////////////////////////////////////////////////////////////////////////
// Badic unconventional calculator
// 

// Gobal variables
const defaultResult = 0;
let result = defaultResult;
let logEntries = [];       // Array example

// get UI/user input data
function getUserInput() {
    return parseFloat(userInput.value);
}

// Add function
function add() {
    const num = getUserInput();
    const initResult = result;
    result += num;
    displayResult(initResult, '+', num);
}

// Subtract function
function subtract() {
    const num = getUserInput();
    const initResult = result;
    result -= num;
    displayResult(initResult, '-', num);
}

// mulpiply function
function multiply() {
    const num = getUserInput();
    const initResult = result;
    result *= num;
    displayResult(initResult, '*', num);
}

// division function
function division() {
    const num = getUserInput();
    const initResult = result;
    result /= num;
    displayResult(initResult, '/', num);
}

// Display data on UI after calculation
function displayResult(initResult, operator, num) {
    const text = `${initResult} ${operator} ${num}`;
    outputResult(result, text);
}

// Event listener from UI elements
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);

