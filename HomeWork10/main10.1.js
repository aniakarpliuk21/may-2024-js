
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
//     кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про
//     це користувача
let formAge = document.forms['userAge'];
formAge.onsubmit = function (ev){
    ev.preventDefault();
    if(this.age.value<18){
        console.log('Ваш вік менше 18 років')
    }else{console.log('Перевірку пройдено')}
}
