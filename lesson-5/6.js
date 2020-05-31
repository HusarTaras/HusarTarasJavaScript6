/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

const isEven = function (myNum) {
    if (typeof myNum == 'number' || isFinite(myNum) === true || isNaN(myNum) === false){
        return myNum % 2 === 0 ? true : false;
    } else {
        throw new Error('Error!!!');
    }
}

isEven(3); // false
isEven(4); // true

exports.isEven = isEven;
