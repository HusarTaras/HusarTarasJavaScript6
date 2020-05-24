/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
    let result = false;
    let sourceIsString =  ( typeof source == 'string') ? true : false;
    let exampleIsString = ( typeof example == 'string') ? true : false;
    let sourceToUpperCase = source.toUpperCase();
    let exampleToUpperCase = example.toUpperCase();

    if (sourceIsString == false || exampleIsString == false) {
        return 'One or more of parameters have incorrect type';
    }

    if (sourceToUpperCase.indexOf(exampleToUpperCase) !== -1) {
        result = true;
    } else {
        result = false;
    }

    return result;
};

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
