/*8) Функция, которая возвращает число, которые мы отправили, только в кубе*/

const getPow = () => {
    let num = prompt("Please enter an integer:")
    if (num) {
        return Math.pow(num, 3);
    }
};

console.log(getPow());