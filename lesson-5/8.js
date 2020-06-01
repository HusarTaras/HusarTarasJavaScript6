/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

const isCorrectParam = function (arg) {
    if (Array.isArray(arg)){
        if ( arg.length > 0) {
            return true;
        } else {
            throw new Error('Error!!!');
        }
    } else {
        throw new Error('Error!!!');
    }
};

const f = function(myArray) {
    if  (isCorrectParam(myArray)) {
        let newArray = myArray.forEach(function functionMap(item){ console.log(item)});
    }

    return;
};

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;


