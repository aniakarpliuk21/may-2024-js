// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
const user1 = new User(1,'Kolia','Kula','jdjjf@gmail.com','380964333323');
const user2 = new User(4,'Petia','Gola','jdfgf@gmail.com','380964333324');
const user3 = new User(7,'Vasia','Pola','fghf@gmail.com','380964333325');
const user4 = new User(2,'Jylia','Mela','jasdf@gmail.com','380964333326');
const user5 = new User(5,'Ania','Pela','ghjf@gmail.com','380964333327');
const user6 = new User(6,'Vika','Alana','kljf@gmail.com','380964333328');
const user7 = new User(3,'Ostap','Kulana','zxcf@gmail.com','380964333329');
const user8 = new User(8,'Ira','Pikaja','zxc@gmail.com','380964333320');
const user9 = new User(10,'Natalia','Vikala','cvbnf@gmail.com','380964333321');
const user10 = new User(9,'Svitlana','Orudzaa','nmtree@gmail.com','380964333322');
const users = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const usersFilter = users.filter(user=> user.id%2 === 0);
console.log(usersFilter);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const usersSort = users.sort((u1,u2)=>{
    return u1.id-u2.id;
});
console.log(usersSort);
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id,name,surname,email,phone,order) {
        super(id,name,surname,email,phone);
        this.order = order;
    }
}
const client1 = new Client(2,'Aida','Gafjg','fvjdjndj@gmail.com','380973432211',['dffd','dwewa','ereww']);
const client2 = new Client(5,'fhhdjdk','Gafjg','fvjdjndj@gmail.com','380973432212',['dffd','dwewa','ereww','fghshjs','fhdjjsjk']);
const client3 = new Client(7,'Fddkdkfk','Gafjg','fvjdjndj@gmail.com','380973432213',['dffd','dwewa','ereww']);
const client4 = new Client(11,'Fdsss','Gafjg','fvjdjndj@gmail.com','380973432214',['dffd','dwewa','ereww','fjdjdkj','fjdjjkd','fhjjjk']);
const client5 = new Client(22,'Dffff','Gafjg','fvjdjndj@gmail.com','380973432215',['dffd','dwewa','ereww']);
const client6 = new Client(26,'Asisa','Gafjg','fvjdjndj@gmail.com','380973432216',['dffd','dwewa','ereww','gff']);
const client7 = new Client(3,'Fkskksa','Gafjg','fvjdjndj@gmail.com','380973432217',['dffd','dwewa','ereww']);
const client8 = new Client(8,'Kgff','Gafjg','fvjdjndj@gmail.com','380973432218',['dffd','dwewa']);
const client9 = new Client(24,'Dvvklv','Gafjg','fvjdjndj@gmail.com','380973432219',['dffd','ereww']);
const client10 = new Client(30,'Afkdkld','Gafjg','fvjdjndj@gmail.com','380973432210',['dffd','dwewa','ereww']);
const clients = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
console.log(clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientsOrderSort = clients.sort((client1,client2) => {
   return client1.order.length-client2.order.length;
})
console.log(clientsOrderSort);
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model,producer,year,maxSpeed,engine){
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.maxSpeed = maxSpeed;
    this.drive = function (){
        return `їдемо зі швидкістю ${maxSpeed} на годину`
    }
    this.info = function (){
        return `
        Модель -  ${model}
        Виробник - ${producer}
        Рік випуску - ${year}
        Максимальна швидкість - ${maxSpeed}
        Об'єм двигуна - ${engine}
        `
    }
    this.increaseMaxSpeed = function (newSpeed){
        return newSpeed+maxSpeed;
    }
    this.changeYear = function (newValue){
        return this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars{
    constructor(model,producer,year,maxSpeed,engine) {
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engine = engine;
    }
    drive (){
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
    info (){
        return `
        Модель -  ${this.model}
        Виробник - ${this.producer}
        Рік випуску - ${this.year}
        Максимальна швидкість - ${this.maxSpeed}
        Об'єм двигуна - ${this.engine}
        `
    }
    increaseMaxSpeed  (newSpeed){
        return newSpeed+this.maxSpeed;
    }
    changeYear (newValue){
        return this.year = newValue;
    }
    addDriver (driver){
        this.driver = driver;
    }
}



// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
const princes1 = new Princess('Anna',37,36);
const princes2 = new Princess('Olha',28,37);
const princes3 = new Princess('Karolina',42,38);
const princes4 = new Princess('Ira',27,35);
const princes5 = new Princess('Natalia',18,36);
const princes6 = new Princess('Zoriana',22,37);
const princes7 = new Princess('Jylia',29,32);
const princes8 = new Princess('Helena',37,42);
const princes9 = new Princess('Nina',24,39);
const princes10 = new Princess('Abrakadabra',53,37);
const  princess =[princes1,princes2,princes3,princes4,princes5,princes6,princes7,princes8,princes9,princes10];

class Princ {
    constructor(name,age,shoesSize) {
        this.name=name;
        this.age=age;
        this.shoesSize=shoesSize;
    }
}
const princ1= new Princ('Adrian',37,35);
const findPrincesForPrinc = princess.find(princes=> princes.size ===princ1.shoesSize);
console.log(findPrincesForPrinc);
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.forEachMy = function (fnc){
    const myArr = this;
    for (const myArrElement of myArr) {
        fnc(myArrElement);
    }
}
Array.prototype.filterMy = function(call){
    const myArr = this;
    const clearArr = []
    for(const myArrElement of myArr) {
        if(call(myArrElement)){
            clearArr.push(myArrElement)
        }
    }
    return clearArr;
}