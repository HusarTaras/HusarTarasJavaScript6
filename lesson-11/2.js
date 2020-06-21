/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

const createFibonacciGenerator = function () {
    let previousNumber = 0;
    let currentNumber = 0;

    return function () {
        let exchangeNumber = 0;

        switch (previousNumber + currentNumber) {
            case 0:
                previousNumber = 0;
                currentNumber = 1;
                break;
            case 1:
                previousNumber = 1;
                currentNumber = 1;
                break;
            default:
                exchangeNumber = currentNumber;
                currentNumber = currentNumber + previousNumber;
                previousNumber = exchangeNumber;
        }
        return currentNumber;
    }
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;
