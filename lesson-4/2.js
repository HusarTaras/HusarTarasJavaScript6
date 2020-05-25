/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

Object.defineProperty(person, 'rate', {
    writable: true,
    configurable: false,
    enumerable: false
});

Object.defineProperty(person, 'salary', {
    get: function () {
        let nyNumber = new Date().getDate();//
        if (typeof this.rate !== 'number' || isNaN(this.rate) || !isFinite(this.rate)) {
            return 0;
        } else {
            return nyNumber * this.rate;
        }
    },
    configurable: false,
    enumerable: false
});

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;


