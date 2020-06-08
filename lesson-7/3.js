/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

const isNumber = function(myNumber) {
    if (typeof myNumber == 'number' || isFinite(myNumber) === true || isNaN(myNumber) === false){
        return true;
    } else {
        throw new Error('Error!!!');
    }
};

const isCorrectTypes = function(myNumber) {
    const correctTypes = ['object', 'number', 'string'];
    const controlElement = (element) => element === typeof myNumber;

    if (correctTypes.some(controlElement) || Array.isArray(myNumber)) {
        return true;
    } else {
        throw new Error('Error!!!');
    }
};

const createArray = function(fillElements, lengthOfArray) {
    let newArray = new Array(lengthOfArray);

    try {
        isCorrectTypes(fillElements);
        isNumber(lengthOfArray);
    } catch (err) {
        console.log(err);
        return;
    }

    newArray.fill(fillElements) ;

    return newArray;
};


const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
