/*9) Функция, которая возвращает факториал числа*/

let getFactorial = prompt("Please enter an integer:");
let total = 1;

for (i = 0; i < getFactorial; i++) {
    total = total * (getFactorial - i);
};

console.log(getFactorial + '! = ' + total);