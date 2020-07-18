
/*
# Задача 4

Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

У класса `Countries` должен быть один метод `send` который должен возвращать промис.

А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.

**Обратите внимание**:

1. Метод `send` должен возвращать промис.
2. Использование `async & await` внутри класса **запрещено**.
3. Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
4. Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран.
5. В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: ${statusCode}`
6. Генерировать ошибку если `url` по типу не строка.
7. Генерировать ошибку если методу `send` передать по типу не число.

**В результате такой код должен работать**:
*/

const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

// Решение

const isNumber = (checkValue) => {
        if (typeof checkValue === 'number' || checkValue === true || checkValue=== false){
            return true;
        } else {
            throw new Error('Error!!!');
        };
}

const isString = (checkValue) => {
    if (typeof checkValue === 'string'){
        return true;
    } else {
        throw new Error('Error!!!');
    };
}

class Countries{
    constructor(url) {
        this.url = url;
    }
    send(size) {
        return new Promise((resolve, reject) => {

            isString(this.url);
            isNumber(size);

            get (this.url + '?size=' + String(size), (error, meta, body) => {
                let statusCode = meta.status;

                if (statusCode === 200) {
                    const { data } = JSON.parse(body);
                    resolve(data);
                } else {
                    reject(`We have error, status code: ${statusCode}`);
                }
            });
        });
    };
};

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();
