/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

function truncate(string, maxLength) {
    let newString = string;
    let stringIsString =  (typeof string == 'string') ? true : false;
    let maxLengthIsNumber = ((typeof Number(maxLength) == 'number') && (isNaN(maxLength) == false) && (isFinite(maxLength) == true)) ? true : false;

    if (stringIsString == false || maxLengthIsNumber == false) {
        return 'One or more of parameters have incorrect type';
    };

    if (string.length > maxLength) {
        newString = string.slice(0, maxLength - 3) + '...';
    };

    return newString;
};

truncate('Вот, что мне хотелось бы сказать на эту тему:', '21a'); // 'Вот, что мне хотел...'

exports.truncate = truncate;
