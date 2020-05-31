/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const f = function () {
    let sum = 0;
    let numberOfArguments = arguments.length;

    for (i = 0; i < numberOfArguments; i++) {
            if (typeof arguments[i] == 'number' || isFinite(arguments[i]) === true || isNaN(arguments[i]) === false){
                sum = sum + arguments[i];
            } else {
                throw new Error('Error!!!');
            }
    }

    return sum;
};


console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
