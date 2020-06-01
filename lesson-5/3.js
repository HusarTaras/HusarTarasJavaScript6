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
        throw new Error('Error!!!');
    }
};

const f = function (myNumber1, myNumber2, myNumber3) {
    let numberOfArguments = arguments.length;

    for (let i = 0; i < numberOfArguments; i++) {
        try {
            isNumber(arguments[i]);
        }
        catch(err) {
            console.log(err);
            return ;
        }
    }
    if (myNumber3 > 0) {
        return (myNumber1 - myNumber2) / myNumber3;
    }

    return;
};

console.log(f(9, 3, 2)); // 3

exports.f = f;
