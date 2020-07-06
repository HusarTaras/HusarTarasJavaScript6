/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение


const isString = (checkValue) => {
    if (typeof checkValue == 'string'){
        return true;
    } else {
        throw new Error('Error!!!');
    };
}

class Stringer {
    constructor () {
    }
    reverse (express) {
        try {
            isString(express);
        } catch(err) {
            console.log(err);
            return;
        }

        return express.split('').reverse().join('');
    };
    uppercaseFirst(express) {
        try {
            isString(express);
        } catch(err) {
            console.log(err);
            return;
        }

        return express.charAt(0).toUpperCase() + express.slice(1);
    };
    uppercaseAll(express) {
        try {
            isString(express);
        } catch(err) {
            console.log(err);
            return;
        }
        let arrOut  = express.split(' ').map(function bc(currentValue){
            return currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
        });

        return arrOut.join(' ');
    };
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;