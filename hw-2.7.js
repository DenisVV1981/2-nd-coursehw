

// Задание 1. Преобразуйте строку js в верхний регистр JS.

let transform = 'АбВгДеЖзИк';
console.log(transform.toUpperCase());

/* Задание 2. Создайте функцию, которая в качестве параметров принимает массив строк и строку.
Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, 
которые начинаются с переданной строки. Регистр символов не должен влиять.*/

function searchStart(arr, result) {
    return arr.filter(el => el.toLowerCase().startsWith(result.toLowerCase()));

}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

/* Задание 3. Округлите число 32.58884:

До меньшего целого
До большего целого
До ближайшего целого*/

function getRoundUp(value) {
    return Math.ceil(value);
}

console.log(getRoundUp(32.58884));

function getRoundDown(value) {
    return Math.floor(value);
}

console.log(getRoundDown(32.58884));


function getRound(value) {
    return Math.round(value);
}

console.log(getRound(32.58884));

/*  Задание 4.
Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.*/

const listNumber = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...listNumber));
console.log(Math.min(...listNumber));

//Задание 5. Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function randomFunc(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(randomFunc(1, 10));

/*Задание 6. Напишите функцию, которая будет принимать на вход целое число,
а возвращать массив случайных целых чисел от 0 до переданного числа. 
Длина массива должна быть в 2 раза меньше переданного числа.*/


function getRandomArrNumbers(parametr) {
    let result = [];
    for (let index = 0; index < Math.floor(parametr / 2); index++) {
        result.push(Math.round(Math.random() * parametr));
    }
    return result;

}

console.log(getRandomArrNumbers(7));

/*Задание 7
Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне*/


let getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

console.log(getRandom(3, 8));

/*Задание 8
Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.*/
let date = new Date();
console.log(date);

/*Задание 9
Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.*/

let myDate = new Date();

myDate.setDate(myDate.getDate() + 73);

console.log(myDate);


/*Задание 10
Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
Дата: <число> <месяц на русском> <год> - это <день недели на русском>. Время: <часы>:<минуты>:<секунды>
Время, которое будет выведено, также хранится в объекте Date*/

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function mySuperHardDay(date) {
    return "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] +
        ". Время:" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

console.log(mySuperHardDay(new Date()));

/* Задание 11.
Дан массив слов: 
['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
Необходимо перемешать элементы массива и вывести на экран пользователю с использованием alert();
Спросить у пользователя:
    Чему равнялся первый элемент массива?
    Чему равнялся последний элемент массива?
    Поздравить пользователя, если он угадал оба элемента.
    Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
    Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.*/



function gameTwo() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    alert(fruits.sort(() => Math.random() - 0.5));
    let userFruit = prompt('Какой был первый фрукт?').toLowerCase();
    let userFruit2 = prompt('Какой был второй фрукт?').toLowerCase();
    if (userFruit === fruits[0].toLowerCase() && userFruit2 === fruits[fruits.length-1].toLowerCase() ) {
        alert('Поздравляем, вы фруктоежка!');
    } else if (userFruit=== fruits[0].toLowerCase() || userFruit2 === fruits[fruits.length-1].toLowerCase()) { 
        alert('Вы были близки к победе!')
    } else {
        alert('Не расстраивайтесь, попробуйте с овощами!')
    }
}

