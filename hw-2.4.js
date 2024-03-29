//1. Выведите в консоль 2 раза слово «Привет».

let greeting = 'Привет';
let count = 0;
while (count < 2) {
    count++;
    console.log(greeting);
}

//2. Выведите в консоль цифры от 1 до 5.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//3. Выведите в консоль числа от 7 до 22.
for (let i = 7; i <= 22; i++) {  // если сделать циклы с исходными значениями
    console.log(i);
}

/*4. Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'.
 С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.'*/

const employers = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let employer in employers) {
    console.log(`${employer} - зарплата ${employers[employer]} долларов.`);
};

/*5. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
 Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), 
 и запишите его в переменную num*/

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
    console.log(n);
}
console.log(num);

/*6. Нам нужно написать программу, которая считает дни месяца по датам, определяет, какой день пятница, и выводит сообщение с
 напоминанием, что нужно подготовить еженедельный отчет.

Условия задачи:

Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).

Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида:

"Сегодня пятница, ...-е число. Необходимо подготовить отчет."

В нашем месяце 31 день. В результате у вас должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам.*/

// for (let friday = 5; friday <= 31; +=7) {
//     if (friday % 7 === 0) {
//         console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
//     } 
// }
// Решение №1 Здесь созданию переменную и присваиваю ей значение 3, предполагая, что первая пятниуа какого-то месяца 3- число.
let firstFriday = 3;
for (let friday = firstFriday; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}


// Если решение предполагало, что мы передем первую пятницу текущего месяца, то 

for (let friday = 4; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}
