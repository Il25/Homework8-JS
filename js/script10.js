/*10) Функция, которая принимает число и возвращает ответ, сложное оно или простое*/

const isPrime = function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "This number is complex!";
        } else {
            return "This number is prime!";
        }
    }
    return num > 0;
};

console.log(isPrime(prompt("Please write a number:")));