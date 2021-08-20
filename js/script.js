/*1) День недели
Нужно ввести число и на полученное число вернуть день недели. 
Обработка ошибок: Если ввел не верное число (больше или отрицательное) вводить сообщение что не верно введено, повторите еще раз.*/

let weekdays = prompt("Enter a number from 1 to 7 and get the day of the week:");

if (weekdays === "1") {
    console.log("Monday");
} else if (weekdays === "2") {
    console.log("Tuesday");
} else if (weekdays === "3") {
    console.log("Wednesday");
} else if (weekdays === "4") {
    console.log("Thursday");
} else if (weekdays === "5") {
    console.log("Friday");
} else if (weekdays === "6") {
    console.log("Saturday");
} else if (weekdays === "7") {
    console.log("Sunday");
} else {
    console.log("Error! Try again!");
};