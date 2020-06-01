/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение


const controlParams = function(cArray, cFunction) {
    if (typeof  cFunction !== 'function' || Array.isArray(cArray) === false) {
        throw new Error('Error');
    }
};

const reduce = function(pArray, pFunction, INITIAL_ACCUMULATOR) {
    let reduceResult = 0;

    try {
        controlParams(pArray, pFunction);
    }
    catch(err) {
        console.log(err);
        return ;
    }

    if (typeof INITIAL_ACCUMULATOR == 'undefined') {
        reduceResult = pArray[0];
    } else {
        reduceResult = INITIAL_ACCUMULATOR;
    }

    for (i = 0; i < pArray.length; i++) {
        pFunction(reduceResult, pArray[i] ,i, pArray);
        reduceResult = reduceResult + pArray[i];
    }

    return reduceResult;
};

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
