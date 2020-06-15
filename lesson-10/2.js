/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение


const controlFunction = function(pFunction) {
    if (typeof pFunction === 'function') {
        return true;
    } else {
        throw new Error('not a function type of parameter');
    }
}

const isNotValue = function(pNumber) {
    if (pNumber){
        return true;
    } else {
        throw new Error('incorrect value of parameter');
    }
};

const calculate = function (...params) {
    let result = 0;
    let nomer = -1;
    for (let currentFunction of params) {
        try {
            nomer++;
            controlFunction(currentFunction);
            result = currentFunction(result);
            isNotValue(result);
        } catch(err) {
            console.log(err);
            return;
        }
    }
    return result;
}

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result); // 55

exports.calculate = calculate;
