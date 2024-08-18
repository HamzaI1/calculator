let firstNumbr = '';
let secondNumbr = '';
let currentOperator = '';
let result = null;
let screen = document.querySelector('.js-screen');
let isoperatorClicked = false;
let isNegativeAllowed = true;

const numbers = document.querySelectorAll('.js-number');
numbers.forEach(number => {
  number.addEventListener('click', () => {
      if (!isoperatorClicked) {
        firstNumbr += number.innerHTML;
        screen.innerHTML = firstNumbr + (currentOperator ? ` ${currentOperator} ` : '');
        isNegativeAllowed = false;
      } else {
        secondNumbr += number.innerHTML;
        screen.innerHTML = `${firstNumbr} ${currentOperator} ${secondNumbr}`;
        isNegativeAllowed = false;
      }
  });
});


const operators = document.querySelectorAll('.js-operator');
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    // Ensure that the first number exists before allowing an operator to be set
    if (firstNumbr === '' && operator.innerHTML !== '−') {
      return; // Do nothing if first number is empty and it's not a negative sign
    };

    // Ensure that a valid number follows the negative sign before allowing another operator
    if (firstNumbr === '-' || (isoperatorClicked && secondNumbr === '-')) {
      return; // Do nothing if only a negative sign exists without a following number
    }

    if (!isoperatorClicked) {
      if (operator.innerHTML === '−' && firstNumbr === '') {
        firstNumbr = '-'; // Set first number as negative
        screen.innerHTML = firstNumbr;
        isNegativeAllowed = false; // Disable further negative signs
      } else {
      currentOperator = operator.innerHTML;
      screen.innerHTML += ` ${currentOperator} `;
      isoperatorClicked = true;
      isNegativeAllowed = true;
      } 
    } else {
      if (operator.innerHTML === '−' && secondNumbr === '' && isNegativeAllowed) {
        secondNumbr = '-';
        screen.innerHTML = `${firstNumbr} ${currentOperator} ${secondNumbr}`;
        isNegativeAllowed = false; // Disallow another negative sign after the first one
      }
    }
  });
});

const clear = document.querySelector('.js-clear');
clear.addEventListener('click', () => {
  const screen = document.querySelector('.js-screen');
  screen.innerHTML = '';
  firstNumbr = '';
  secondNumbr = '';
  currentOperator = '';
  isoperatorClicked = false;
  isNegativeAllowed = true;
});

const calculate = document.querySelector('.js-calculate');
calculate.addEventListener('click', () => {
  if (firstNumbr !== '' && secondNumbr !== '' && currentOperator !== '') {
    result = evaluate(firstNumbr, secondNumbr, currentOperator);
    screen.innerHTML = result;
    // Reset for next calculation
    firstNumbr = result;
    secondNumbr = '';
    currentOperator = '';
    isoperatorClicked = false;
    isNegativeAllowed = false;
  }
});


function evaluate(num1, num2, operator) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  
  switch (operator) {
    case '+':
      return number1 + number2;
    case '−':
      return number1 - number2;
    case '×':
      return number1 * number2;
    case '÷':
      return number2 !== 0 ? number1 / number2 : 'Error: division by zero.'; // Handle division by zero
    default:
      return '';
  }
}
