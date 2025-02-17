// #I2XsG6f

// let calc = (a, b) => a * b;
//
// console.log(calc(5, 2));

// #ETGAxbEn8l

// let calc = (r) => Math.PI * Math.pow(2, r);
//
// console.log(calc(8))

// #Mbiz5K4yFe7

// let calc = (r, h) => (2 * Math.PI * Math.pow(r, 2)) + (2 * Math.PI * r * h);
//
// console.log(calc(5, 9))

// #SIdMd0hQ

// let array = (arr) => {
//     for (i of arr) {
//         console.log(i);
//     }
// };
//
// array([1, 5, 3245, 15]);

// #59g0IsA

// let paragraph = (text) => document.write(`<p>${text}</p>`);
//
// paragraph('Lorem ipsum dolor sit.');

// #hOL6126

// let lishka = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
//
// lishka('Lorem ipsum dolor sit amet, consectetur adipisicing.')

// #0Kxco1edSN

// let lishka = (text, amount) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// lishka('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur!', 5)

// #gEFoxMMO

// let arr = (arr) => {
//     document.write(`<ul>`)
//     for (let j = 0; j < arr.length; j++) {
//         document.write(`<li>${arr[j]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// arr(['ksjdhf', 'erth', 69, 'aurth', 30522, -345, 3249.123, true, false])

// #bovDJDTIjt

// let func = (obj) => {
//     for (let j of obj) {
//         document.write(`<div>${j.id}, ${j.name}, ${j.age}</div>`);
//     }
// }
//
// func([
//     {id: 1, name: 'John', age: 23},
//     {id: 2, name: 'Jack', age: 32},
//     {id: 3, name: 'Joe', age: 42},
//     {id: 4, name: 'Jan', age: 24},
// ]);

// #pghbnSB

// let small = (arr) => {
//     let smallest = arr[0];
//     for (let j of arr) {
//         if (j < smallest) {
//             smallest = j;
//         }
//     }
//     console.log(smallest);
// }
//
// small([12, 653, 9, 53, -795])

// #EKRNVPM

// let sum = (arr) => {
//     let sumOfArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumOfArr += arr[i];
//     }
//     console.log(sumOfArr);
// }
//
// sum([1, 9, 13, 568])

// #kpsbSQCt2Lf

// let swap = (arr, index1, index2) => {
//     let index3 = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = index3;
//     return arr;
// }
//
// console.log(swap([234, 582, 6573, 2346, 5687], 0, 1));

// #mkGDenYnNjn

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let amount = 0;
    for (let sum of currencyValues) {
        if (sum.currency === exchangeCurrency) {
            amount = sumUAH / sum.value;
    }
    }
    console.log(amount)
}

exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 40}], 'EUR');