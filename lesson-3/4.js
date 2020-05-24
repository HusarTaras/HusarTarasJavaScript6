/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';

// Решение

function extractCurrencyValue(PRICE) {
    let newPRICE = PRICE.slice(1);
    let numberNewPRICE ;

    if (typeof PRICE == 'string') {
        isString = true;
    } else {
        isString = false;
        return null;
    };
    if ((typeof Number(newPRICE) == 'number') && (isNaN(Number(newPRICE)) == false) && (isFinite(Number(newPRICE)) == true)) {
        numberNewPRICE = Number(newPRICE);
    } else {
        numberNewPRICE = null;
    };

    return numberNewPRICE;
};

console.log(extractCurrencyValue(PRICE)); // 120

exports.extractCurrencyValue = extractCurrencyValue;