/*Задача 1 Дана функция callbackWithArrayLength, первым аргументом она принимает массив, а вторым — колбэк.
Код функции не дописан, и она всегда вызывает callback с числом −1, а должна вызывать колбэк с длиной переданного первым аргументом массива.
Скопируйте этот код в консоль браузера и допишите тело функции так, чтобы код ниже вывел в консоль 1 2 5. Сейчас он выводит -1 -1 -1*/


const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort(function (a, b) {
    return a.age - b.age;
}
)
console.log(people.sort());

/*Задание 2.Реализуйте функцию filter, которая должна работать аналогично методу массива `filter.
За основу возьмите функцию map, которую мы реализовывали на уроке.Чтобы из функции map сделать filter,
нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
Возьмите за основу код ниже. Задание считается выполненным, если два console.log в коде выводят правильное значение:*/

const peopleList = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

function isPositive(element) {
    return element >= 0;
}
function isMale(element) {
    return element.gender === 'male';
}
function filter(source, rule) {

    let result = [];
    source.map(item => {
        if (rule(item)) {
            result.push(item);
        }
    }
    );

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9] // здесь в параметр передан анонимный массив

console.log(filter(peopleList, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

/*Задание 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет 
выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».*/

const timer = (deadline) => {
    const current = setInterval(() => {
        console.log(new Date());
    }, 3000);


    setTimeout(() => {
        clearInterval(current);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};

timer(30);


/* Задание 4. Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
setTimeout*/

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {        
    console.log('Привет, Глеб!');
})

/*Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
Привет, Глеб!
Прошла одна секунда

Правильный порядок:
Прошла одна секунда
Привет, Глеб!
Исправьте код, чтобы он выводил сообщения в правильном порядке:*/

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк

function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}
// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi('Глеб Иванов'));