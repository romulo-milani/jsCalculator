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
        return add(firstNumber, secondNumber).toFixed(3);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber).toFixed(3);
    } else if (operator == '*') {
        return multiply(firstNumber, secondNumber).toFixed(3);
    } else if (operator == '/') {
        return divide(firstNumber, secondNumber).toFixed(3);
    };
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

        //starts populating the second variable if the first was already typed by the user
        if (operator != '') {

            firstP.innerHTML = '';
            secondP.innerHTML += e.target.innerHTML;
            secondNumber = secondP.innerHTML;

        } else if (equalsUsed == true) { //does the operation if the user clicks on the operator again, instead of the equals button

            firstP.innerHTML = '';
            firstP.innerHTML += e.target.innerHTML;
            firstNumber = firstP.innerHTML;
            equalsUsed = false;

        } else if (equalsUsed == false) {
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

        //if user presses the operator button a second time, the calculator makes the operation
        if (pScreenUp != '' && operatorP.innerHTML != '' && secondP.innerHTML != '') {
            if (operator == '/' && secondNumber == 0) { //can't devide by zero
                alert("can't devide by zero!");
                firstNumber = '';
                secondNumber = '';
                operator = '';
                firstP.innerHTML = ''
                secondP.innerHTML = '';
                operatorP.innerHTML = '';
                pScreenUp.innerHTML = '';
            } else {
                equalsUsed = true;

                firstNumber = parseFloat(firstNumber);
                secondNumber = parseFloat(secondNumber);

                let result = operate(operator, firstNumber, secondNumber);
                pScreenUp.innerHTML = ` ${firstNumber} ${operator} ${secondNumber} = ${result}`;

                firstNumber = result;
                secondNumber = '';

                operatorP.innerHTML = e.target.innerHTML;
                operator = operatorP.innerHTML

                firstP.innerHTML = result;
                secondP.innerHTML = '';
            }


        } else {
            //copy the text and display it on top of the screen
            firstNumber = firstP.innerHTML;
            pScreenUp.innerHTML = firstNumber;

            //Display the selected operator
            operatorP.innerHTML = e.target.innerHTML;
            operator = operatorP.innerHTML
        }

    })
})

//every time someone presses equals, the calculator shows the result, and erases the screen if the user starts pressing more number.
//with the variable below, we know if the user pressed the equals button
let equalsUsed = false;

//EQUALS BUTTON
const equals = document.querySelector('.btnE');
equals.addEventListener('click', function () {

    if (firstNumber == '' || secondNumber == '' || operator == '') {

    } else if (operator == '/' && secondNumber == 0) { //can't devide by zero
        alert("can't devide by zero!");
        firstNumber = '';
        secondNumber = '';
        operator = '';
        firstP.innerHTML = ''
        secondP.innerHTML = '';
        operatorP.innerHTML = '';
        pScreenUp.innerHTML = '';
    } else {

        equalsUsed = true;

        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        let result = operate(operator, firstNumber, secondNumber);
        pScreenUp.innerHTML += ` ${operator} ${secondNumber} = ${result}`;

        firstNumber = '';
        secondNumber = '';
        operator = '';
        firstP.innerHTML = result;
        secondP.innerHTML = '';
        operatorP.innerHTML = '';
    }
})

//CLEAR BUTTON
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {

    firstNumber = '';
    secondNumber = '';
    operator = '';
    firstP.innerHTML = ''
    secondP.innerHTML = '';
    operatorP.innerHTML = '';
    pScreenUp.innerHTML = '';
})

//BACKSPCE BUTTON
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {

    firstP.innerHTML = (firstP.innerHTML).substring(0, firstP.innerHTML.length - 1);
    secondP.innerHTML = (secondP.innerHTML).substring(0, secondP.innerHTML.length - 1);
    secondNumber = secondP.innerHTML;
})


//DECIMALS BUTTON
const dot = document.querySelector('.btnD');
dot.addEventListener('click', (e) => {
    if (secondNumber == '' && operator == '') {
        firstP.innerHTML += '.';
    } else if (firstNumber != '' && operator != '') {
        secondP.innerHTML += '.';
    }
})