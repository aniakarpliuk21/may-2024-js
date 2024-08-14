// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['string',false,true,5,9,-999,'lets',42,'one','cats'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:'Genry',
    pageCount:956,
    genre:'Romantic'
};
let book2 = {
    title:'Psuchology',
    pageCount:452,
    genre:'Science'
};
let book3 = {
    title:'Medicine',
    pageCount:1245,
    genre:'Science'
};

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:'Genry',
    pageCount:956,
    genre:'Romantic',
    authors:[
        {name:'Anna',age:28},
        {name:'Peter',age:33}
    ]};
let book5 = {
    title:'Psuchology',
    pageCount:452,
    genre:'Science',
    authors:[
        {name:'Karol',age:42}
    ]};
let book6 = {
    title:'Medicine',
    pageCount:1245,
    genre:'Science',
    authors: [
        {name:'Endrik',age:52}
    ]};


// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// 'Вивести в консоль пароль кожного користувача
let users = [
    {name:'Anna',username:'AnnaK',password:'Kadfbhb'},
    {name:'Vita',username:'VitaDF',password:'Dvcjcjx'},
    {name:'Oleg',username:'OlegF',password:'vvvxxv'},
    {name:'Julia',username:'JuliaFDD',password:'dfdhhjn'},
    {name:'Andrii',username:'AndriiHJjhh',password:'dxsvdhbgfb'},
    {name:'Samanta',username:'SamantaNG',password:'clkfjhg'},
    {name:'Henri',username:'Henrihhh',password:'ddfghh'},
    {name:'Peter',username:'Peter122',password:'sdery'},
    {name:'Nazar',username:'Nazar122',password:'A3tgvcc'},
    {name:'Oleh',username:'Oleh677',password:'Askfkf'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за
// термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temp = [
    {morning:18,afternoon:22,evening:17},
    {morning:17,afternoon:25,evening:16},
    {morning:16,afternoon:23,evening:15},
    {morning:14,afternoon:22,evening:14},
    {morning:12,afternoon:18,evening:15},
    {morning:19,afternoon:19,evening:17},
    {morning:21,afternoon:22,evening:22}
];

// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте
// скрипт при a, що дорівнює 1, 0, -3

let x=235;
if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}
x=1;
if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}
x=0;
if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}
x=-3;
if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої
// четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=23;
if (time>=0&&time<=14){
    console.log('1 чверть');
}else if(time>=15&&time<=29){
    console.log('2 чверть')
}else if(time>=30&&time<=44){
    console.log('3 чверть');
}else if(time>=45&&time<=59){
    console.log('4 чверть');
}else{
    console.log('Введіть коректний час від 0 до 59')
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).
let day = 22;
if(day>0 && day<=10){
    console.log('1 декада місяця');
}else if(day>10 && day<=20){
    console.log('2 декада місяця');
}else if(day>20 && day<=31){
    console.log('3 декада місяця');
}else{
    console.log('Введіть коректне значення від 1 до 31');
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
//     на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня
//     англійською).

let number = prompt('Введіть порядковий номер дня тижня');
switch (number) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Введіть число від 1 до 7');
}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = 7;
let b = 14;
if (a>b){
    console.log(a);
}else if(a<b){
    console.log(b);
}else{
    console.log(a);
}

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в
// неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xY= 0 || "default";
console.log(xY);

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
// перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
// вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер')
}