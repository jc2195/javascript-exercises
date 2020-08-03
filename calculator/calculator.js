function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let result = 0;
	for (i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

function multiply (array) {
	let result = 1;
	for (i = 0; i < array.length; i++) {
		result *= array[i];
	}
	return result;
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	if (a == 0) {
		return 1;
	}
	else {
		let result = a;
		for (i = a-1; i > 0; i--) {
			result *= i;
		}
		return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}