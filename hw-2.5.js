"user strict"
// Задание без проверки

const user = {
    name: 'Denis',
    age: 41,
    city: 'Barcelona',
    getInfo() {
        return `Me llamo ${user.name}, tengo ${user.age} años, vive en ${user.city}.`;
    }
}
console.log(user.getInfo());

// Задание без проверки

function getRectangleArea() {
    return this.width * this.height;
};

function getRectanglePerimeter() {
    return (this.width + this.height) * 2;
};

const square1 = {
    width: 10,
    height: 20,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
}

const square2 = {
    width: 15,
    height: 25,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
}

console.log(`Площадь первого прямоугольника равна ${square1.getArea()}`);
console.log(`Площадь второго прямоугольника равна ${square2.getArea()}`);
console.log(`Периметр первого прямоугольника равна ${square1.getPerimeter()}`);
console.log(`Периметр второго прямоугольника равна ${square2.getPerimeter()}`);

/*ЗАДАНИЕ 1. Напишите функцию, которая возвращает меньшее из 2 чисел. 
Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.*/

let compareNumbers = (aFirst, bSecond) => aFirst > bSecond ? bSecond : aFirst;

let aFirst = Number(prompt('Введите первое число'));
let bSecond = Number(prompt('Введите второе число'));

console.log(compareNumbers(aFirst, bSecond));

//ЗАДАНИЕ 2. Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

let checkOddNumber = (aFirst) => aFirst % 2 == 0 ? 'Число четное' : 'Число нечетное';

let oddNumber = Number(prompt('Введите число для проверки чётности'));

console.log(checkOddNumber(oddNumber));

//ЗАДАНИЕ 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

let powerTwoWithLog = (aFirst) => console.log(aFirst ** 2);

powerTwoWithLog(4);  // условия дз не совсем понятны, поэтому делаю ввод числа в консоль, передавая параметры функции без внешнего ввода данных.

//ЗАДАНИЕ 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

let powerTwo = (aFirst) => aFirst ** 2;

powerTwo(4);

/*ЗАДАНИЕ 4. 
Создайте функцию, которая:

Спрашивает у пользователя, сколько ему лет.
Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».*/

let userAge = prompt('Сколько вам лет?');
let checkAge;

if (userAge < 0) {
    checkAge = () => console.log('Вы ввели неправильное значение!');
} else if (user <= 12) {
    checkAge = () => console.log('Привет, друг');
} else {
    checkAge = () => console.log('Добро пожаловать!');
}

checkAge();


/*ЗАДАНИЕ 5. 

Напишите функцию, которая на вход принимает 2 числа:
Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и isNaN() помогут.)
Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
Если оба параметра — числа, то вернуть произведение данных чисел.*/

let isItNumber = (arg1, arg2) => {
    let firstIsNumber = !isNaN(Number(arg1));
    let secondIsNumber = !isNaN(Number(arg2));
    if (firstIsNumber === true && secondIsNumber === true) {
        return arg1 * arg2;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

console.log(isItNumber(1, 'a'));

/*ЗАДАНИЕ 6.

Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, после чего возводит его в куб и возвращает следующую строку: 
'n в кубе равняется <получившееся значение>'. 
Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.
Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами от 0 до 10 включительно.*/

let cubeNumber = (argument) => {
    let isNumber = !isNaN(Number(argument));
    if (isNumber === true) {
        return argument ** 3;
    } else {
        return 'Переданный параметр не является числом'
    }
}
let userNumber = prompt('Введите любое число для возведения в куб')
console.log(`${userNumber} в кубе равняется ${cubeNumber(userNumber)}`);

// тест проверка от 0 до 10
for (let i = 0; i <= 10; i++) {
    let y = cubeNumber(i);
    if (y === i ** 3) {
        console.log(`Корректно вычислен куб для значения i=${i}: ${y}`);
    }
    else {
        console.log(`Некорректно вычислен куб для значения i=${i}: ${y}`);
    }
}


/*ЗАДАНИЕ 7.
Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea,
которое возвращает площадь круга через радиус, а также getPerimeter , который возвращает периметр окружности.*/


function getCircleArea() {
    return this.radius ** 2 * this.letPi;
}
function getCirclePerimetr(paras) {
    return this.letPi * 2 * this.radius;
} 
const circle1 = {
    radius: 5,
    letPi: 3.14,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimetr
}

const circle2 = {
    radius: 10,
    letPi: 3.14,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimetr
}


console.log(`Площадь первой окружности равна ${circle1.getArea()}`);
console.log(`Площадь первой окружности равна ${circle2.getArea()}`);
console.log(`Периметр первой окружности равен ${circle1.getPerimeter()}`);
console.log(`Периметр первой окружности равен ${circle2.getPerimeter()}`);

/*Задание 8,
Свяжите ваш сайт с первой игрой.
Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) 
и возвращает время года, в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").
Придумайте, как должна работать функция, если ей передать неправильный параметр. 
Выведите пример использования функции в консоль.
Для решения задачи используйте конструкцию else if 
и логические операторы || (логическое ИЛИ) и &&(логическое И).*/

function playCheckSeasons() {
    let monthNumber = prompt('Введите номер месяца.');

    let isNumber = !isNaN(Number(monthNumber));
    if (isNumber !== true) {
        console.log('Переданный параметр не является числом');
        return;
    }

    switch (Number(monthNumber)) {
        case 1:
        case 2:
        case 12:
            console.log('зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('осень');
            break;
        default:
            console.log('Такого месяца не существует!');
            break;
    }
}  