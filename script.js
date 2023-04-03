//BASIC MATH OPERATIONS
function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

//OPERATE FUNCION
function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return add(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator == '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        return divide(firstNumber, secondNumber);
    };
}

//FUNCTION THAT ERASES THE P ELEMENT
function eraseP() {

}


//OPERATION VARIABLES
let firstNumber = '';
let secondNumber = '';
let operator = '';

//STORE THE NUMBERS ON CLICK IN A VARIABLE AND DISPLAY THEM
const numberBtns = document.querySelectorAll('.numberBtn');
const firstP = document.querySelector('.displayFirstP');
const secondP = document.querySelector('.displaySecondP');

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', (e) => {

        if (operator != '') {

            firstP.innerHTML = '';
            secondP.innerHTML += e.target.innerHTML;
            secondNumber = secondP.innerHTML;

        } else {
            firstP.innerHTML += e.target.innerHTML;
            firstNumber = firstP.innerHTML;
        }
    })
});

//STORE THE OPERATOR IN A VARIABLE AND DISPLAY IT
const operatorBtns = document.querySelectorAll('.operatorBtn');
const operatorP = document.querySelector('.operatorP');
const pScreenUp = document.querySelector('.pScreenUp');
const screenUpDiv = document.querySelector('.screenUp');
const screenDown = document.querySelector('.screenDown');

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        //copy the text and display it on top of the screen
        firstNumber = firstP.innerHTML;
        pScreenUp.innerHTML = firstNumber;

        //Display the selected operator
        operatorP.innerHTML = e.target.innerHTML;
        operator = operatorP.innerHTML

    })
})

//EQUALS BUTTON
const equals = document.querySelector('.btnE');
equals.addEventListener('click', function () {

    if (firstNumber == '' || secondNumber == '' || operator == '') {

    } else {

        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        let result = operate(operator, firstNumber, secondNumber);

        firstNumber = '';
        secondNumber = '';
        operator = '';
        firstP.innerHTML = result;
        pScreenUp.innerHTML = result;
        secondP.innerHTML = '';
        operatorP.innerHTML = '';
    }
})