// lesson 2.1

let arr = [1, 22, -333, 3.14, 'mom', 'wife', true, false, 'homework', 23];
console.log(arr);

// lesson 2.2

let obj1 = {
    title: 'Pride and Predjudice',
    pageCount: 450,
    genre: 'romance'
}

let obj2 = {
    title: 'The Call of Cthulhu',
    pageCount: 150,
    genre: 'horror'
}

let obj3 = {
    title: 'How can I learn',
    pageCount: 200,
    genre: 'self-help'
}

// // lesson 2.3

let obj11 = {
    title: 'Pride and Prejudice',
    pageCount: 450,
    genre: 'romance',
    authors: [
        {name: 'Jane Austin',
        age: 38},
        {name: 'Jean Austine',
        age: 28}
    ]
}

let obj22 = {
    title: 'The Call of Cthulhu',
    pageCount: 150,
    genre: 'horror',
    authors: [
        {name: 'Howard Lovecraft',
        age: 38},
        {name: 'Goward Lavcraft',
        age: 28}

    ]
}

let obj33 = {
    title: 'Good Omens',
    pageCount: 550,
    genre: 'fantasy',
    authors: [
        {name: 'Terry Pratchett',
        age: 42},
        {name: 'Neil Gaiman',
        age: 30}
    ]
}

// //lesson 2.4

let usersArray = [
    {name: 'qwe',
    username: 'qwe1',
    password: 'qweqwe1'},

    {name: 'rty',
        username: 'rty2',
        password: 'rtyrty2'},

    {name: 'uio',
        username: 'uio3',
        password: 'uiouio3'},

    {name: 'p[]',
        username: 'p[]4',
        password: 'p[]p[]4'},

    {name: 'asd',
        username: 'asd5',
        password: 'asdasd5'},

    {name: 'fgh',
        username: 'fgh6',
        password: 'fghfgh6'},

    {name: 'jkl',
        username: 'jkl7',
        password: 'jkljkl7'},

    {name: 'zxc',
        username: 'zxc8',
        password: 'zxczxc8'},

    {name: 'vbn',
        username: 'vbn9',
        password: 'vbnvbn9'},

    {name: 'm,.',
        username: 'm,.10',
        password: 'm,.m,.10'}
]

console.log(usersArray[0].password)
console.log(usersArray[1].password)
console.log(usersArray[2].password)
console.log(usersArray[3].password)
console.log(usersArray[4].password)
console.log(usersArray[5].password)
console.log(usersArray[6].password)
console.log(usersArray[7].password)
console.log(usersArray[8].password)
console.log(usersArray[9].password)

// // lesson 2.5

let week = [
    {day: 'Monday',
    morning: 11,
    day: 14,
    evening: 9},

    {day: 'Tuesday',
    morning: 12,
    day: 16,
    evening: 10},

    {day: 'Wednesday',
    morning: 13,
    day: 17,
    evening: 11},

    {day: 'Thursday',
    morning: 14,
    day: 18,
    evening: 12},

    {day: 'Friday',
    morning: 15,
    day: 19,
    evening: 13},

    {day: 'Saturday',
    morning: 16,
    day: 20,
    evening: 14},

    {day: 'Sunday',
    morning: 17,
    day: 21,
    evening: 15},
]

// // lesson 2.6

let a = +prompt('Напишіть число 1, 0 або -3:');
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// // lesson 2.7

let time = +prompt('enter a number from 0 to 59:');
if (time <= 15) {
    console.log('first quarter of the hour');
} else if (time >= 15 && time <= 30) {
    console.log('second quarter of the hour');
} else if (time >= 30 && time <= 45) {
    console.log('third quarter of the hour');
} else {
    console.log('final quarter of the hour');
}

// // lesson 2.8

let day = +prompt('enter a number from 1 to 31:');
if (day <= 10) {
    console.log('first part of the month');
} else if (day >= 10 && day <= 20) {
    console.log('second part of the month');
} else {
    console.log('third part of the month');
}

// // lesson 2.9

let dayOfWeek = +prompt('enter a number from 1 to 7:');
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
        // break;
}

// // lesson 2.10

let numbers = [+prompt('Enter a number'), +prompt('Enter another number')];
if (numbers[0] > numbers[1]) {
    console.log(numbers[0]);
} else if (numbers[0] === numbers[1]) {
    console.log("They're the same");
} else{
    console.log(numbers[1]);
}

// // lesson 2.11

let x = prompt('Enter anything:')
if (x === undefined || x === null || x === 0 || x === '' || x === NaN || x === false)
{
    console.log('default');
}

// // lesson 2.12

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
