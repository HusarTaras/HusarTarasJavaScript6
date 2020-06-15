/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
}

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const controlObject = function(pObject) {
    if (typeof pObject === 'object') {
        return true;
    } else {
        throw new Error('not an object type of parameter');
    }
}

const controlFunction = function(pFunction) {
    if (typeof pFunction === 'function') {
        return true;
    } else {
        throw new Error('not a function type of parameter');
    }
}

const controlArray = function(pArray) {
    if (Array.isArray(pArray) === false) {
        return true;
    } else {
        throw new Error('not an array type of parameter');
    }
}

const bind = function (func, obj, ...params) {

    try {
        controlFunction(func);
        controlObject(obj);
        controlArray(obj);
    } catch (err) {
        console.log(err);
        return;
    }

    return  () => {
        return func.apply(obj, params);
    }
}

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;
