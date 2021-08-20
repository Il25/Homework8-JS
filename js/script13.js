/*12) Дополнительное задание: Выполнить сортировку массива методом пузырком*/

const numbers = [22, 12, 91, 55, 25, 1, 7, 5, 42, 30, 80, 2];

function bubbleSort(arr) {
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length - 1 - n; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort(numbers));