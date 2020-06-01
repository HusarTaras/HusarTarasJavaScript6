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
const isNumber = function (num) {
    if (typeof num == 'number' || isFinite(num) === true || isNaN(num) === false){
        return true;
    } else {
        throw new Error('Error!!!');
    }
};

const f = function () {
    let sum = 0;
    let numberOfArguments = arguments.length;

    for (let i = 0; i < numberOfArguments; i++) {
        try {
            isNumber(arguments[i]);
            sum = sum + arguments[i];
        }
        catch(err) {
            console.log(err);
            return ;
        }
    }

    return sum;
};


console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
