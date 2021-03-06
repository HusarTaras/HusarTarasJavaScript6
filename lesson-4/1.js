/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение

Object.defineProperty(person, 'salary', {
    get: function () {
        let today = new Date();
        let endMonth = new Date(today.getFullYear(), today.getMonth() + 1 , 1, 0, 0, 0);

        return (endMonth - today) / (24 * 60 * 60 * 1000) > 20 ? `good salary` : `bad salary`;
    }
});

person.salary; // good salary

exports.person = person;
