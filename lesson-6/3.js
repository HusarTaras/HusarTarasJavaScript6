/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение
const controlParams = function(cArray, cFunction) {
    if (typeof  cFunction !== 'function' || Array.isArray(cArray) === false) {
        throw new Error('Error');
    }
};

const isNumber = function(myNumber) {
    if (typeof myNumber == 'number' || isFinite(myNumber) === true || isNaN(myNumber) === false){
        return true;
    } else {
        return false;
    }
};

const every = function(pArray, pFunction) {

    try {
        controlParams(pArray, pFunction);
    }
    catch(err) {
        console.log(err);
        return ;
    };
    for (let i = 0; i < pArray.length; i++) {
        if (pFunction(pArray[i], i, pArray) === false) {
            return false;
        }
    };

    return true;
};

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;
