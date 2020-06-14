/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const controlObject = function(pObject) {
    if (typeof pObject === 'object' && pObject.toString() === '[object Object]') {
        return true;
    } else {
        throw new Error('not object type of paramrter');
    }
}

const descriptorsOverwrite = function (inputAssignObject, source, inputItemName) {
    let propertyDescriptor = Object.getOwnPropertyDescriptor(source, inputItemName);

    Object.defineProperty(inputAssignObject, inputItemName, {
        writable: propertyDescriptor.writable
    });
    Object.defineProperty(inputAssignObject, inputItemName, {
        enumerable: propertyDescriptor.enumerable
    });
    Object.defineProperty(inputAssignObject, inputItemName, {
        configurable: propertyDescriptor.configurable
    });

}

const shallowMerge = function(inputUser, inputUserData) {

    try {
        controlObject(inputUser);
        controlObject(inputUserData);
    } catch (err) {
        console.log(err);
        return;
    }

    const assignObject = Object.assign({}, inputUser, inputUserData);
    const itemsUser = Object.entries(inputUser);
    const itemsUserData = Object.entries(inputUserData);

    for (let item of Object.entries(assignObject)) {
        let itemOfObject = itemsUserData.find(element => {return (element[0] === item[0] && element[1] === item[1])});

        if (itemOfObject) {
            descriptorsOverwrite(assignObject, inputUserData, itemOfObject[0]);
        } else {
            itemOfObject = itemsUser.find(element => {return (element[0] === item[0] && element[1] === item[1])});
            descriptorsOverwrite(assignObject, inputUser, itemOfObject[0]);
        }
    }

    return assignObject;
}

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;
