/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

const controlParams = function(cArray, cFunction) {
    if (typeof  cFunction !== 'function' || Array.isArray(cArray) === false) {
        throw new Error('Error');
    }
};

const filter = function(pArray, pFunction) {
    let newArray = [];

    try {
        controlParams(pArray, pFunction);
    }
    catch(err) {
        console.log(err);
        return ;
    };
    for (let i = 0; i < pArray.length; i++) {
        if (pFunction(pArray[i], i, pArray)) {
            newArray.push(pArray[i]);
        }
    };

    return newArray;
};

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
