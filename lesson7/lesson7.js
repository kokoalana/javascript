// #XjJuucOMR0

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = []

// users.push(new User(3, 'qwe', 'qwe', 'qwe@gmail.com', 123));
// users.push(new User(5, 'rty', 'rty', 'rty@gmail.com', 234));
// users.push(new User(10, 'uio', 'uio', 'uio@gmail.com', 345));
// users.push(new User(8, 'p[]', 'p[]', 'p[]@gmail.com', 456));
// users.push(new User(6, 'asd', 'asd', 'asd@gmail.com', 567));
// users.push(new User(1, 'fgh', 'fgh', 'fgh@gmail.com', 678));
// users.push(new User(7, 'jkl', 'jkl', 'jkl@gmail.com', 789));
// users.push(new User(4, 'zxc', 'zxc', 'zxc@gmail.com', 890));
// users.push(new User(9, 'vbn', 'vbn', 'vbn@gmail.com', 900));
// users.push(new User(2, 'm,.', 'm,.', 'm,.@gmail.com', 150));

// console.log(users);

// #2ikXsE2WiKZ

// console.log(users.filter(user => user.id % 2 === 0));

// #pOeHKct

// console.log(users.sort((a, b) => a.id - b.id));

// #nkMXISv

// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }

// let clients = [
//     new Client(1, 'qwe', 'qwe', 'qwe@gmail.com', 123, [{title: 'LG TV', price: 199, quantity: 1}, {title: 'toaster', price: 50, quantity: 1}, {title: 'phone', price: 90, quantity: 1}]),
//     new Client(2, 'rty', 'rty', 'rty@gmail.com', 234, [{title: 'Samsung TV', price: 500, quantity: 3}]),
//     new Client(3, 'uio', 'uio', 'uio@gmail.com', 345, [{title: 'toaster', price: 50, quantity: 1}, {title: 'phone', price: 90, quantity: 1}]),
//     new Client(4, 'p[]', 'p[]', 'p[]@gmail.com', 456, [{title: 'iPhone', price: 100, quantity: 1}, {title: 'Macbook', price: 200, quantity: 1}, {title: 'AirPods', price: 70, quantity: 2}, {title: 'iPad', price: 150, quantity: 1}]),
//     new Client(5, 'asd', 'asd', 'asd@gmail.com', 567, [{title: 'iPad', price: 150, quantity: 1}, {title: 'Asus laptop', price: 200, quantity: 1}]),
//     new Client(6, 'fgh', 'fgh', 'fgh@gmail.com', 678, [{title: 'LG TV', price: 199, quantity: 1}, {title: 'toaster', price: 50, quantity: 1}, {title: 'phone', price: 90, quantity: 1}]),
//     new Client(7, 'jkl', 'jkl', 'jkl@gmail.com', 789, [{title: 'LG TV', price: 199, quantity: 1}, {title: 'toaster', price: 50, quantity: 1}]),
//     new Client(8, 'zxc', 'zxc', 'zxc@gmail.com', 890, [{title: 'iPhone', price: 100, quantity: 1}, {title: 'Macbook', price: 200, quantity: 1}, {title: 'AirPods', price: 70, quantity: 2}]),
//     new Client(9, 'vbn', 'vbn', 'vbn@gmail.com', 900, [{title: 'iPhone', price: 100, quantity: 1}, {title: 'Macbook', price: 200, quantity: 1}, {title: 'AirPods', price: 70, quantity: 2}, {title: 'iPad', price: 150, quantity: 1}]),
//     new Client(10, 'mnb', 'mnb', 'mnb@gmail.com', 100, [{title: 'iPad', price: 150, quantity: 1}, {title: 'Asus laptop', price: 200, quantity: 1}])
// ]

// console.log(clients);

// #8abtVjRv
// робила разом з чатом гпт, але виявилось, що все було не так важко і досить зрозуміло, я просто заплуталась

// let sortedClients = array => {
//     return array.sort((a, b) => a.order.length - b.order.length);
// }

// console.log(sortedClients(clients));

// #vV9a6584I5
// проблема конкретно з addDriver -- я вже і передивлялась, і переписувала рішення, і до чату гпт зверталась, але воно не працює

// function Car(model, make, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.make = make;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`model: ${this.model};
//         make: ${this.make};
//         year: ${this.year};
//         maximum speed: ${this.maxSpeed};
//         engine capacity: ${this.engineCapacity};`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }

// let car = new Car('camry', 'toyota', 2015, 70, 9);
// console.log(car);

// car.drive();
// car.increaseMaxSpeed(20);
// car.changeYear(2025);
// car.addDriver({name: 'Max', age: 30, experience: '10 years'});
// car.info();

// #5kla3yMpgp
// та ж сама проблема з addDriver

// class Car{
//     constructor(model, make, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.make = make;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }

//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };

//     info() {
//         console.log(`
//         model: ${this.model},
//         make: ${this.make}
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         engineCapacity: ${this.engineCapacity}`)
//     };

//     increaseMaxSpeed(addSpeed) {
//         this.maxSpeed += addSpeed;
//     };

//     changeYear(year) {
//         this.year = year;
//     };

//     addDriver(driver) {
//         this.driver = driver;
//     };
// }

// let car = new Car('camry', 'toyota', 2015, 70, 9);
// console.log(car);

// car.drive();
// car.increaseMaxSpeed(20);
// car.changeYear(2025);
// car.addDriver({name: 'Max', age: 30, experience: '10 years'});
// car.info();

// #zg6Fifnqig

// class Cinderella {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }

// class Prince extends Cinderella {
//     constructor(name, age, shoesShoeSize) {
//         super(name, age);
//         this.shoesShoeSize = shoesShoeSize;
//     }
// }

// let cinderellas = [
//     new Cinderella('Ana', 10, 30),
//     new Cinderella('Amy', 11, 31),
//     new Cinderella('Ellie', 12, 32),
//     new Cinderella('Claire', 13, 33),
//     new Cinderella('Chloe', 14, 34),
//     new Cinderella('Sierra', 15, 35),
//     new Cinderella('Silva', 16, 36),
//     new Cinderella('Tammy', 17, 37),
//     new Cinderella('Layla', 18, 38),
//     new Cinderella('Brie', 19, 39),
//     new Cinderella('Madeleine', 20, 40),
// ];

// let prince = new Prince('Joey', 20, 40);

// for (let cinderella of cinderellas) {
//     if (cinderella.shoeSize === prince.shoesShoeSize) {
//         console.log(`Prince ${prince.name}, aged ${prince.age}, has found his Cinderella -- ${cinderella.name}, aged ${cinderella.age}, through shoe fitting!`)
//     } else if (cinderella.shoeSize !== prince.shoeSize) {
//         console.log('Wrong shoe size.');
//     }
// }

// let perfectMatch = cinderellas.find(cinderella => cinderella.shoeSize === prince.shoesShoeSize);
// console.log(perfectMatch);

// #gsKLAsNWM
//myForEach частково списала з рішення, частково з чату ГПТ. myFilter зробила самостійно на основі myForEach, але ще не до кінця розібралась що до чого

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }};

// let cinderellasArray = [
//     {name: 'Ana', age: 10, shoeSize: 30},
//     {name: 'Amy', age: 11, shoeSize: 31},
//     {name: 'Ellie', age: 12, shoeSize: 32},
//     {name: 'Claire', age: 13, shoeSize: 33},
//     {name: 'Chloe', age: 14, shoeSize: 34},
//     {name: 'Sierra', age: 15, shoeSize: 35},
//     {name: 'Silva', age: 16, shoeSize: 36},
//     {name: 'Tammy', age: 17, shoeSize: 37},
//     {name: 'Layla', age: 18, shoeSize: 38},
//     {name: 'Brie', age: 19, shoeSize: 39},
//     {name: 'Madeleine', age: 20, shoeSize: 40},
// ];

// cinderellasArray.myForEach(item => {
//     item.status = item.age < 18 ? 'minor' : 'adult';
// });

// console.log(cinderellasArray);

// Array.prototype.myFilter = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// cinderellasArray.myFilter(item => {
//     item.status === 'adult' ? console.log(item) : console.log('too young');
// });