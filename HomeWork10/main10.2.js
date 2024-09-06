// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
let formUser = document.forms['userForm'];
formUser.onsubmit = function (ev){
    ev.preventDefault();
    let div = document.getElementById('userInfo');
    if(div){
        div.innerHTML = '';
    }
    div.innerText = `Ім'я - ${this.name.value}
        Прізвище - ${this.surname.value}
        Вік - ${this.age.value}`;
    document.body.appendChild(div);

}
