// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function objClon (obj){
    if(obj){
        let objFn = [];
        for (const key in obj) {
            if(typeof obj[key] === 'function'){
                const fnClone = obj[key].bind({});
                objFn.push({fnClone, key})
}
        }
        const objClone = JSON.parse(JSON.stringify(obj))
        for (const objFnElement of objFn) {
            objClone[objFnElement.key] = objFnElement.fnClone
        }
        console.log(objClone)
        return objClone;
    }
    throw new Error('Перевірити обєкт')
}

//
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
coursesAndDurationArray.map((value,index)=>({...value,id:index+1}))