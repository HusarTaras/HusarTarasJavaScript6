/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

const createFibonacciGenerator = function () {
    let previousNumber = 0;
    let currentNumber = 0;

    let object = {
        print: function () {
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
        },
        reset: function () {
            previousNumber = 0;
            currentNumber = 0;
        }
    }

    return object;
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
