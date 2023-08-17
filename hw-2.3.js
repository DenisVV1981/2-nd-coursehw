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

if (cFirst > 0 && cFirst < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//2. Дубль для себя через тернарный оператор

let cFirst2 = prompt('Введите любое число');
let message = (cFirst2 > 0 && cFirst2 < 10) ? 'Верно' : 'Неверно';
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

if (!isNaN(monthNumber)) {
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
}

/*Дополнительная практика

7. Создайте программу, проверяющую число на четность/нечетность*/

let quantity = prompt('Пожалуйста, введите любое число');

if (quantity === null || quantity.trim() == '' || isNaN(Number(quantity))) {
    alert('Введенные данные не являются числом!');
} else {
    quantity = Number(quantity);
    let oddMessage = quantity % 2 === 0 ? 'Число чётное' : 'Число нечетное';
    alert(oddMessage);
}

/*8. Напишите программу, которая определяет, чем пользуется клиент (iOS или Android),
 и выдает соответствующее сообщение для обоих вариантов.

let osTest = navigator.platform;
console.log(`Установите версию приложения для ${osTest} по ссылке`); // определение версии в реальном времени */

/*8. Решение по инструкции из дз
Напишите программу, которая определяет, чем пользуется клиент (iOS или Android)

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
}*/

//8 (дубль, как в задании на основании ввода данных пользователем)

let userOs = prompt('Введите название вашей операционной системы: iOS или Android');
let operation = {
    "IOS": 0,
    "ANDROID": 1
}

let clientDeviceOs;
switch (operation[userOs.toUpperCase()]) {
    case 0:
        alert('Установите версию приложения для iOS по ссылке');
        clientDeviceOs = 0;
        break;

    case 1:
        alert('Установите версию приложения для Android по ссылке');
        clientDeviceOs = 1;
        break;

    default:
        alert('Ничего не ставьте, у вас ненормальная ОС');
        break;
}


// 9 вообще не понял как сделать и как получить желаемый год..... :((

let clientDeviceYear = Number(prompt('Введите год выпуска вашего устроайства'));

if (clientDeviceOs === 0) {
    if (clientDeviceYear >= 2015) {
        alert('Установите версию приложения для iOS по ссылке');

    } else {
        alert('Установите облегченную версию приложения для iOS по ссылке');

    }
} else if (clientDeviceOs === 1) {
    if (clientDeviceYear >= 2015) {
        alert('Установите версию приложения для Android по ссылкe');
    } else {
        alert('Установите облегченную версию приложения для Android по ссылке');
    }

} else {
    alert('У вас что-то непонятное.');
}

