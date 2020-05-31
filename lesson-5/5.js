/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Для добавление нового элемента в конец массива используйте метод push.
 *
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение

const isNumber = function (arg) {
    if (typeof arg == 'number' || isFinite(arg) === true || isNaN(arg) === false){
        return true;
    } else {
        return false;
    }
};

const isPositive = function (par) {
    if ( isNumber(par) === false )  {
        throw new Error('Error!!!');
    }

    return par < 0 ? false : true;
};

isPositive(-3); // false
isPositive(3); // true

exports.isPositive = isPositive;
