const operator = prompt("Enter operator ( +, -, *, / ): ");

const firstNumber = parseFloat(prompt('Enter first number: '));
const secondNumber = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+'){
    result = firstNumber + secondNumber;
} else if (operator == '-'){
    result = firstNumber - secondNumber;
} else if (operator == '*'){
    result = firstNumber * secondNumber;
} else {
    result = firstNumber / secondNumber;
}

console.log("The answer is : " + result);