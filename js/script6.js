/*6) Написать функцию, которая с помощью prompt спрашивает у пользователя число от 1 до 10. 
При это функция тоже генерирует случайное число от 1 до 10. Если числа совпадут, 
то выводится ответ “You guessed it right!”. Если числа не совпадают, то выдается ответ “Sorry. You lost”*/

const getNumber = function (max, min) {
    let myNumber = Math.trunc(prompt("Guess a number:"));
    let secretNumber = Math.trunc(Math.random() * (max - min + 1)) + min;
    while (true) {
        if (myNumber <= max && myNumber >= min) {
            if (myNumber === secretNumber) {
                return `The Secret number is: ${secretNumber}. You guessed it right!`;
            } else {
                return `The Secret number is: ${secretNumber}. Sorry. You get lost!`;
            }
        } else {
            myNumber = Math.trunc(prompt("Try again:"));
        }
    }
};

console.log(getNumber(10, 1));