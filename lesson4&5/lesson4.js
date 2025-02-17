// #I2XsG6f

// function calcS(a, b) {
//     let result = a * b;
//     console.log(result);
//     return result;
// }
//
// calcS(9, 4);

// #ETGAxbEn8l

// function calc(r) {
//     let result = Math.PI * Math.pow(r, 2);
//     console.log(result);
//     return result;
// }
//
// calc(3)

// #Mbiz5K4yFe7

// function calc(r, h) {
//     let result = (2 * Math.PI * Math.pow(r, 2)) + (2 * Math.PI * r * h);
//     console.log(result);
//     return result;
// }
//
// calc(5, 8);

// #SIdMd0hQ

// function array(arr) {
//     for (let ar of arr) {
//         console.log(ar);
//     }
// }
//
// array([1, 2, 4, 6, 8, 10, 14]);

// #59g0IsA

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraph('Lorem ipsum dolor sit amet.');

// #hOL6126

// function ulWithLi(liText) {
//     document.write(`
//     <ul>
//     <li>${liText}</li>
//     <li>${liText}</li>
//     <li>${liText}</li>
//     </ul>`)
// }
//
// ulWithLi('Lorem ipsum dolor.');

// #0Kxco1edSN

// function ulWithLi(liText, liAmount) {
//     document.write(`<ul>`);
//     for (let i = 0; i < liAmount; i++) {
//         document.write(`<li>${liText}</li>`);
//     };
//     document.write(`</ul>`);
// };
//
// ulWithLi('Lorem ipsum dolor.', 5);

// #gEFoxMMO

// function primitiveArray(array) {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     };
//     document.write(`</ul>`);
// };
//
// primitiveArray([1, "don't pick up the phone", true, "you know he's always calling when he's drunk and alone", false, 2, "don't let him in"])

// #bovDJDTIjt
// Піддивилась у відповіді, бо заплуталась в умові завдання

// function arrobj(users) {
//     for (let user of users) {
//         document.write(`<div>${user.id} ${user.name}, ${user.age}</div>`);
//     }
// }
//
// arrobj([
//     {id: 1, name: 'John', age: 23},
//     {id: 2, name: 'Jack', age: 32},
//     {id: 3, name: 'Joe', age: 42},
//     {id: 4, name: 'Jan', age: 24},
// ]);

// #pghbnSB

// function smallestbaby(arr) {
//     let smallest = arr[0];
//     for (let num of arr) {
//         if (num < smallest) {
//             smallest = num;
//         }
//     }
//     return smallest;
// }
//
// console.log(smallestbaby([100, 203, 850, 185, 9]));

// #EKRNVPM

// function sum(arr) {
//     let sumOfArr = 0;
//     for (let num = 0; num < arr.length; num++) {
//         sumOfArr += arr[num];
//     }
//     return sumOfArr;
// }
//
// console.log(sum([2, 3, 4, 5, 6]));

// #kpsbSQCt2Lf
// піддивилась у рішеннях

// function swap(arr, index1, index2) {
//     let index3 = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = index3;
//
//     return arr
// }
//
// console.log(swap([1, 2, 3, 4, 5, 6], 3, 0));

// #mkGDenYnNjn
// зізнаюсь чесно, нічо не зрозуміла і все списала

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency;
    for (let i of currencyValues) {
        if (i.currency === exchangeCurrency) {
            chosenCurrency = i;
        }
    }
    let result = sumUAH / chosenCurrency.value;
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'));