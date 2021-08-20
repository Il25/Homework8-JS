/*7) Функция, которая принимает число до 1000 и возвращает массив из делителей этого числа*/

function getDivisors(num) {
	let result = [];
	for (let i = 0; i <= num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
};

console.log(getDivisors(prompt("Please enter an integer:")));