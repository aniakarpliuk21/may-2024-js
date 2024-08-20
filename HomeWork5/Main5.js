// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectangle  = (a,b) => a*b;
console.log(sRectangle(2,4));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const sCircle = r => 3.14*(r**2);
console.log(sCircle(3));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sCylinder = (h,r) => 2 * 3.14 * h * r;
console.log(sCylinder(2,4));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
const arrElements = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<div>${arrElement}</div>`)
    }
}
arrElements([1,2,3,4,5]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const pCreate = (text) =>{
    document.write(`<p>${text}</p>`)
}
pCreate('Hello!!!');


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий
const ulLiCreate = (liText) => {
    document.write(`<ul>
<li>${liText}</li>
<li>${liText}</li>
<li>${liText}</li>
</ul>`)
}
ulLiCreate('Alloha');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const liCreateF = (liText,index) => {
    document.write(`<ul>`)
    for (let i = 0; i <index; i++) {
        document.write(`<li>${liText}</li>`)
    }
    document.write(`</ul>`)
}
liCreateF('Exit',3);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них
// список
const liCreateforArr = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
liCreateforArr([1,4,'fozzy','kozzy',true]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
const createUserObject = (arr,) => {
    for (const arrElement of arr) {
        document.write(`<div class="user">
<span>${arrElement.id}.${arrElement.name},</span>
<span>age - ${arrElement.age}</span>
</div>`)
    }
}
createUserObject([
    {id:1,name:'Anna',age:30},
    {id:2,name:'Karolina',age:35},
    {id:3,name:'Oleg',age:22}
]);


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
const minNumberArr = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i]
        if(number<min){
            min = number;
        }
    }
    return console.log(min);

}
minNumberArr([122,11,64,0,-233,654]);

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
}
sum([1,3,5,2,-2]);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2) => {
    let elem1 = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=elem1;
    console.log(arr);
}
swap([11,22,33,44],0,1);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],
//     'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if(currencyValue['currency'] === exchangeCurrency){
            let res = sumUAH/currencyValue['value'];
            console.log(res);
        }
    }
}
exchange(10000,
    [
        {currency:'USD',value:25},
        {currency:'EUR',value:42}],
    'USD')