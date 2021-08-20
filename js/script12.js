/*12) Дополнительное задание: Выполнить сортировку массива методом бинарного поиска**/

const numbers = [22, 12, 91, 55, 25, 1, 7, 5, 42, 30, 80, 2];

let binary = function (a, b) {
    let left = 0;
    let right = numbers.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.round((right - left) / 2) + left;
        if (a > b) {
            return 1;
        } else if (a == b) {
            return 0;
        } else if (a < b) {
            return -1;
        }
    }
    return a - b;
};

console.log(numbers.sort(binary));