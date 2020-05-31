/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const isNumber = function (num) {
    if (typeof num == 'number' || isFinite(num) === true || isNaN(num) === false){
        return true;
    } else {
        return false;
    }
};

const f = function (myNumber1, myNumber2, myNumber3) {
    let numberOfArguments = arguments.length;

    for (i = 0; i < numberOfArguments; i++) {
        if (isNumber(arguments[i]) === false) {
            throw new Error('Error!!!');
        }
    }

    return (myNumber1 - myNumber2) / myNumber3;
};

console.log(f(9, 3, 2)); // 3

exports.f = f;
