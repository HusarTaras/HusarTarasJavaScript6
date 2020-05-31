/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение



const f = function (myNumber) {
    if (typeof myNumber == 'number' || isFinite(myNumber) === true || isNaN(myNumber) === false){
        return myNumber ** 3;
    } else {
        throw new Error('Error!!!');
    };
};

console.log(f(2)); // 8

exports.f = f;
