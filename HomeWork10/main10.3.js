//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
//

let number = document.getElementById('number');
let keyStor = localStorage.getItem('key');
if (keyStor) {
    number.innerText = keyStor;
} else {
    keyStor = 0;
    localStorage.setItem("key", keyStor);
}
keyStor++;
number.innerText = keyStor;
localStorage.setItem("key", keyStor);