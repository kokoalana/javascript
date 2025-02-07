// lesson 3.1

for (let i = 0; i < 10; i++) {
    document.write('<div> <h3>Lorem ipsum dolor sit amet.</h3> <br/></div>');
}

// lesson 3.2

// for (let i = 1; i <= 10; i++) {
//     document.write('<div>Lorem ' + i + '</div>');
// }

// lesson 3.3

// let i = 0;
// while (i < 20) {
//     document.write('<div><h1>Lorem</h1></div>');
//     i++;
// }

// lesson 3.4

// let i = 1;
// while (i <= 20) {
//     document.write('<div><h1>Lorem ' + i + '</h1></div>');
//     i++;
// }

// lesson 3.5

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// for (let item of listOfItems) {
//     document.write('<ul><li>' + item + '</li></ul>');
// }

// lesson 3.6

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let product of products) {
//     document.write(`<h3 style="text-transform: capitalize">${product.title}. Price - ${product.price} UAH</h3> <img src="${product.image}"></div>"`);
// };

// lesson 3.7

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (let user of users) {
//     if (user.status === true) {
//         console.log(user);
//     }
// }
//
// for (let user of users) {
//     if (user.status === false) {
//         console.log(user);
//     }
// }
//
// for (let user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }