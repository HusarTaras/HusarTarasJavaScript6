/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

const rezultArray = [];

const isNumber = (...params) => {
    for (let item in params) {
        if (typeof params[item] === 'number' || isFinite(params[item]) === true || isNaN(params[item]) === false){
            return true;
        } else {
            throw new Error('Error!!!');
        };
    }
}

(function () {
    setTimeout(() => {
        getRezult();
    }, 0);
}())

function getRezult() {

    for (i = 0; i < rezultArray.length; i++) {
        //console.log(rezArr[i]);
        let [num, delay] = rezultArray[i];

        setTimeout(() => {
            console.log(num);
        }, delay * (i + 1));
    }
}

function postpone (start, end, delay) {
    try {
        isNumber (start, end, delay);
        let right = (start < end);

        if (!right) {[end, start] = [start, end]}
        for (let i = start; i <= end ; i++) {
            if (right) {
                rezultArray.push([i, delay]);
            }else {
                rezultArray.push([end + 1 - i, delay]);
            };
        }
    } catch(err) {
        console.log(err);
        return;
    }
}




postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
