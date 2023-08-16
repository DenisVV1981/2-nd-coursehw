//1. Создайте программу проверки правильности введенного пароля.

let password = 'code123';
let checkPassword = prompt('Введите пароль');

if (password === checkPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


/*2. Создайте переменную с и запишите в нее любое число. Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно».
Для решения задачи используйте логический оператор && (логическое И).*/

let cFirst = prompt('Введите любое число');

if (cFirst >= 0 && cFirst <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


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
}

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
}

/*Дополнительная практика

7. Создайте программу, проверяющую число на четность/нечетность*/

let quantity = prompt('Пожалуйста, введите любое число');

quantity = Number(quantity);
if (isNaN(quantity)) {
    console.log('Введенные данные не являются числом!');
} else {
    let oddMessage = quantity % 2 === 0 ? 'Число чётное' : 'Число нечетное';
    alert(oddMessage);
}

/*8. Напишите программу, которая определяет, чем пользуется клиент (iOS или Android),
 и выдает соответствующее сообщение для обоих вариантов.*/
let osTest = navigator.platform;
console.log(`Установите версию приложения для ${osTest} по ссылке`); // определение версии в реальном времени 

//8. Решение по инструкции из дз
//Напишите программу, которая определяет, чем пользуется клиент (iOS или Android)
let os = navigator.platform;
let clientOS;
switch (os) {
    case 'iOS':
        clientOS = 0;
        console.log('Установите версию приложения для iOS по ссылке');
        break;

    case 'Android':
        clientOS = 1;
        console.log('Установите версию приложения для Android по ссылке');
        break;

    default:
        clientOS = null;
        console.log('Ничего не ставьте, у вас ненормальная ОС');
        break;
}



// 9 вообще не понял как сделать и как получить желаемый год..... :((