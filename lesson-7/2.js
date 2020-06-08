/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

const iaArray = function (cArray) {
    if (Array.isArray(cArray) === false) {
        throw new Error('Error!!!');
    }
};

const isNumber = function(cArray) {
    if (cArray.every(item => typeof item == 'number' || isFinite(item) === true || isNaN(item) === false) === false) {
        throw new Error('Error!!!');
    }
};

const flatRecursive =function (inputArray) {
    return inputArray.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatRecursive(val)) : acc.concat(val), []);
}

const collect = function (collectArray) {
    let summa;

    try {
        iaArray(collectArray);
    } catch (err) {
        console.log(err);
        return;
    }

    collectArray = flatRecursive(collectArray);

    try {
        isNumber(collectArray);
    } catch (err) {
        console.log(err);
        return;
    }

    if (collectArray.length === 0) {
        return 0;
    }

    summa = collectArray.reduce((accVal, cVal) => accVal + cVal);

    return summa;
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
