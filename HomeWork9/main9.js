// #8Nmt60ZT
// - створити блок,
let div = document.createElement('div')
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap','collapse','alpha', 'beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background='blue';
div.style.color='red';
div.style.fontSize='25px';
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
let divClone = div.cloneNode(true);
document.body.appendChild((divClone));
//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts']
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (const arrElement of arr) {
    let li = document.createElement('li');
    li.innerText = arrElement;
    ul.appendChild(li);
}
//
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divArrEl = document.createElement('div');
    divArrEl.innerText =`Напрямок - ${coursesAndDurationArrayElement.title},
     Термін навчання - ${coursesAndDurationArrayElement.monthDuration}`;
    divArrEl.style.margin = '5px';
    document.body.appendChild(divArrEl);
}
// =========================
//     #Kx1xgoKy8
//     - Є масив
let coursesArr = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesArrElement of coursesArr) {
    let divCourse = document.createElement('div');
    divCourse.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = coursesArrElement.title;
    let p = document.createElement('p');
    p.classList.add('description')
    p.innerText = coursesArrElement.monthDuration
    divCourse.append(h1,p);
    document.body.appendChild(divCourse);
}
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.