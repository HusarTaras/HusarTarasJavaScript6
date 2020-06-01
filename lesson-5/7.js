/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

const isNumber = function (arg) {
    if (typeof arg == 'number' || isFinite(arg) === true || isNaN(arg) === false){
        return true;
    } else {
        return false;
    }
};

const getDivisors = function (myNum) {
    let array = new Array();

    if (isNumber(myNum) === false){
        throw new Error('Error!!!');
    } else {
        for (let i = 1; i <= myNum; i++) {
            if ( myNum % i === 0) {
                array.push(i);
            }
        }
    }

    return array;
};


getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
