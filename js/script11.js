/*11) Повторяющийся элемент: Нужно создать массив с разными элементами. Некоторые элементы должны повторятся. Нужно удалить из массива повторяющийся элемент.*/

const array = ["BMW", "KIA", "Mercedes", "Infinity", "BMW", "Toyota", "Tesla", "Toyota", "KIA", "Ford"];
// const array = [1, 2, 4, 4, 4, 7, 8, 11, 11, 11, 11, 11, 11, 11, 7, 9, 2, 2, 2, 9];

console.log(array);

const uniqArray = array.filter((item, index) => {
    return index === array.indexOf(item);
});

console.log(uniqArray);