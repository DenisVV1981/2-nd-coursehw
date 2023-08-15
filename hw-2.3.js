//1. Создайте программу проверки правильности введенного пароля.

let password = 'code123';
let checkPassword = prompt('Введите пароль');

if (password === checkPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
};


/*2. Создайте переменную с и запишите в нее любое число. Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно».
Для решения задачи используйте логический оператор && (логическое И).*/

let cFirst = prompt('Введите любое число');

if (cFirst >= 0 && cFirst <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
};


//2. Дубль для себя через тернарный оператор

let cFirst2 = prompt('Введите любое число');
let message = (cFirst >= 0 && cFirst <= 10) ? 'Верно' : 'Неверно';
console.log(message);


//3. Создайте две переменные — d и e, запишите в них любые числа.Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно».

let dFirst = 101;
let eSecond = 15;

if (dFirst > 100 || eSecond > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
};

//4. Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23'


let aFirst = '2';
let bSecond = '3';
aFirst = Number(aFirst);
bSecond = Number(bSecond);
console.log(aFirst + bSecond);

//5.Напишите программу, которая определяет по номеру месяца в году, к какому сезону этот месяц принадлежит

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
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
};