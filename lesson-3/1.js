/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(string) {
    let isString;
    let newString = string;
    let oldStringToUpperCase = string.toUpperCase();;
    if ( typeof string == 'string') {
        isString = true;
    } else {
        isString = false;
        return 'Error, of parameter is not a string type';
    };
    if ( (isString == true) && (string.length > 0)) {
        newString = string.replace(string[0], oldStringToUpperCase[0]);
    };

    return newString;
};

upperCaseFirst('pitter'); // Pitter
upperCaseFirst('');// ''


exports.upperCaseFirst = upperCaseFirst;
