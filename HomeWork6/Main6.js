// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';
console.log(str4.toUpperCase());
console.log(str5.toUpperCase());
console.log(str6.toUpperCase());


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const toLowerCase = (text) => console.log(text.toLowerCase());
toLowerCase('HELLO WORLD');
toLowerCase('LOREM IPSUM');
toLowerCase('JAVASCRIPT IS COOL');


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const str7 = ' dirty string   ';
console.log(str7.trim());


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str8 = 'Ревуть воли як ясла повні';
console.log(str8.split(' '));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arr1 = [10,8,-7,55,987,-1011,0,1050,0];
let mapArr = arr1.map(value => value.toString());
console.log(mapArr);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(array,direction) {
    if (direction === 'ascending'){
         array.sort(function(item1,item2){
             if(item1>item2){
                 return 1;
             }else{
                 return -1;
             }
         });
        console.log(array);
    }
    if(direction === 'descending'){
        array.sort(function (item1,item2){
            if(item1>item2){
                return -1;
            }else{
              return 1;
            }
        })
        console.log(array);
    }

}
let nums = [11,21,3];
sortNums(nums,'ascending');
sortNums(nums,'descending');


// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const sortArr = coursesAndDurationArray.sort(function (c1,c2) {
    return c2.monthDuration - c1.monthDuration;
});
console.log(sortArr);
const filterArr = coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filterArr);
const arrAddId = coursesAndDurationArray.map(function(value,index){
return {
    id:index+1,
    title:value.title,
    monthDuration:value.monthDuration
}
});
console.log(arrAddId);
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const cardsSuit = ['spade', 'diamond','heart', 'clubs'];
const values = ['6','7','8','9','10', 'ace','jack','queen','king'];
const cardsArr = [];
for (const cardSuit of cardsSuit) {
    for (const value of values) {
       const card= {cardSuit:cardSuit,value:value};
        if(cardSuit === 'heart'||cardSuit ==='diamond'){
            card.color='red';
        }else{
            card.color='black';
        }
        cardsArr.push(card);
    }
}
console.log(cardsArr)
let findSpadeAce = cardsArr.find(value=>value.cardSuit==='spade' && value.value ==='ace');
console.log(findSpadeAce);
let findCardsSix = cardsArr.filter(value=>value.value ==='6');
console.log(findCardsSix);
let findCardsRed = cardsArr.filter(value=>value.color ==='red');
console.log(findCardsRed);
let findCardsDiamond = cardsArr.filter(value=>value.cardSuit ==='diamond');
console.log(findCardsDiamond);
let findCardsSpade = cardsArr.filter(value=>value.cardSuit ==='spade' && value.value!=='6'
    &&value.value!=='7' && value.value!=='8');
console.log(findCardsSpade);
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardsSorter = cardsArr.reduce((acc,card) => {
    if(card.cardSuit === 'spade'){
        acc.statA.push(card)
    }if(card.cardSuit === 'diamond'){
        acc.statB.push(card)
    }if(card.cardSuit === 'heart') {
        acc.statC.push(card)
    }if(card.cardSuit === 'clubs') {
        acc.statD.push(card)
    }
    return acc;
},{statA:[],statB:[],statC:[],statD:[]})
console.log(cardsSorter)

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const sassFind = coursesArray.filter(value =>
    value.modules.includes('sass'));
console.log(sassFind);
let dockerFind = coursesArray.filter(value=>
    value.modules.includes('docker'))
console.log(dockerFind);
