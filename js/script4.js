/*4) Количество элементов двух массивов
Нужно создать 2 массива. Массивы должны хранить однотипные данные. Далее нужно их объединить в один и вывести количество всех элементов.*/

const fruits = ["grapefruit", "peach", "avocado", "pineapple"];
const berries = ["cherry", "strawberry", "jarberry", "blueberry"];

console.log(fruits);
console.log(berries);

const array = fruits.concat(berries);

console.log(array);
console.log(array.length);