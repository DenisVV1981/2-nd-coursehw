'use strict'

// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index) => {
//     console.log(`${index}: ${el}`);
// });


// const numbers = [2, 4, 5, 6, 8];

// numbers.forEach((el, index, arr) => {
//     console.log(`${index}: ${el}, массив: ${arr}`);
// });

/* Задание 1. Дан массив: [1, 5, 4, 10, 0, 3].Необходимо создать цикл, который будет выводить элементы массива до тех пор, 
пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.*/

const exerciseNumberOne = [1, 5, 4, 10, 0, 3];

for (let item of exerciseNumberOne) {
    if (item === 10) break;
    console.log(item);
}


/* Задание 2. Дан массив: [1, 5, 4, 10, 0, 3]. Найдите позицию (индекс) числа 4 в этом массиве.
Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.*/

console.log(exerciseNumberOne.indexOf(4));

/*Задание 3.Дан массив чисел: [1, 3, 5, 10, 20].
С помощью метода join выведите элементы массива через пробел (пустую строку ' ').*/


let exerciseNumberThree = [1, 3, 5, 10, 20];
exerciseNumberThree = exerciseNumberThree.join(' ');
console.log(exerciseNumberThree);

/*Задание 4. С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]].*/

let exerciseNumberFour = [];

for (let index = 0; index < 3; index++) {
    let innerArray = [];
    for (let element = 0; element < 3; element++) {
        innerArray.push(1);
    }
    exerciseNumberFour.push(innerArray);
}
console.log(exerciseNumberFour);


//Задание 5. Дан массив: [1, 1, 1].Добавьте в конец массива значения 2, 2, 2.

let exerciseNumberFive = [1, 1, 1,];

for (let index = 0; index < 3; index++) {
    exerciseNumberFive.push(2);
}

console.log(exerciseNumberFive);

/*Задание 6. Дан массив: [9, 8, 7, 'a', 6, 5].
С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива.*/

let exerciseNumberSix = [9, 8, 7, 'a', 6, 5];

exerciseNumberSix = exerciseNumberSix.sort();
exerciseNumberSix.pop();
console.log(exerciseNumberSix);


/*Задание 7. Дан массив:[9, 8, 7, 6, 5].
Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве,
вывести в alert «Угадал», в противном случае вывести «Не угадал».*/

const arr7 = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число от 0 до 10'));
let index7 = arr7.indexOf(userNumber);
let message7 = index7 === -1 ? 'Не угадал' : 'Угадал';
alert(message7);


//Задание 8. Дана строка: 'abcdef' Необходимо, чтобы программа вывела в консоль 'fedcba'

let word = 'abcdef';
let arr8 = word.split('').reverse().join('');

console.log(arr8);


/* Задание 9. Дан массив: [[1, 2, 3,],[4, 5, 6]].
Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6] */

let arr9 = [[1, 2, 3,], [4, 5, 6]];

let arrConcate = arr9[0].concat(arr9[1]);

console.log(arrConcate);

/* Задание 10. Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for
и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
Следующий элемент массива можно получить с помощью индекса: i + 1.
Обратите внимание, что у последнего элемента нет следующего.*/


let arr10 = [9, 10, 5, 7, 6, 8, 3, 4, 1];

for (let index = 0; index < arr10.length - 1; index++) {

    console.log(arr10[index] + arr10[index + 1]);
}

// Задание 11. Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

//решение 1 (сложная логика через создание функции без map())

function square(arr11Numbers) {
    let arr11Squares = [];
    for (let item of arr11Numbers) {
        arr11Squares.push(item ** 2);
    }
    return arr11Squares;
}

let arr11 = [9, 10, 5, 7, 6];
console.log(square(arr11));

//решение 2 (логика простая через вызов функции)

const arr11Light = arr11.map(el => el ** 2);
console.log(arr11Light);

//решение 3 (соттветствует ТЗ по ДЗ) РЕШЕНИЕ ДЛЯ УДОВЛЕТВОРЕНИЯ НАСТАВНИКОВ

function square3(arr11Numbers) {
    return arr11Numbers.map(el => el ** 2);
}
console.log(square3(arr11));


// Задание 12. Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.


function getLengthWords(randomWords) {
    return randomWords.map(el => el.length);
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква'])); // [5, 0, 4, 19, 5]

/*Задание 13. Создайте функцию, которая принимает на вход массив целых
 чисел, а возвращает массив содержащий только отрицательные значения*/

const filterPositive = (array) => array.filter(el => el < 0);


console.log(filterPositive([-1, 0, 5, -10, 56]));  // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2]));  // => [-25, -1000, -2]