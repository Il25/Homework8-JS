/*3) Какое число больше
Нужно вывести окно, на каждую отдельно. Ввести два числа. В ответ вывести сообщение о том какое из них больше.*/

let firstNumber = prompt("Write a first number:");
let secondNumber = prompt("Write a second number:");

if (firstNumber > secondNumber) {
    console.log(`${firstNumber} > ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`${firstNumber} < ${secondNumber}`);
} else if (firstNumber = secondNumber) {
    console.log(`${firstNumber} = ${secondNumber}`);
};