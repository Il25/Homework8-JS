/*5) Сумма элементов массива
Нужно создать массив с числами. Далее нужно сложить все элементы и вывести их сумму*/

const numbers = [2, 5, 12, 22, 25, 30];

const sum = numbers.reduce(function (a, b) {
    return a + b;
});

console.log(sum);