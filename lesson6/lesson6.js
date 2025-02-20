// #dFeorS3m7u

// let s1 = 'hello world';
// let s2 = 'lorem ipsum';
// let s3 = 'javascript is cool';
//
// console.log(s1.length);
// console.log(s2.length);
// console.log(s3.length);
//
// console.log(s1.toUpperCase());
// console.log(s2.toUpperCase());
// console.log(s3.toUpperCase());
//
// console.log(s1.toLowerCase());
// console.log(s2.toLowerCase());
// console.log(s3.toLowerCase());

// #0b89BkYZwu

// let str = ' dirty string   ';
// console.log(str.trim());

// #bfoJuse4ZzP

// let str = 'Ревуть воли як ясла повні';
//
// let stringToArray = (string) => {
//     return string.split(' ');
// }
//
// console.log(stringToArray(str));

// #Rbr5kEQ

// let numarr = [10,8,-7,55,987,-1011,0,1050,0];
//
// let mappedNumArr = numarr.map(num => num + '');
//
// console.log(mappedNumArr);

// #5hqyKTfmc

// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums([8, 145, 4445, 19, 3, 6, 185, -184], 'ascending'));
// console.log(sortNums([8, 145, 4445, 19, 3, 6, 185, -184], 'descending'));

// #yo06d74c1C

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let courseDurationSort = (array) => {
//     return array.sort((a, b) => b.monthDuration - a.monthDuration);
// }
//
// console.log(courseDurationSort(coursesAndDurationArray));
//
// let fivePlusFilter = (array) => {
//     return array.filter((course) => course.monthDuration > 5);
// }
//
// console.log(fivePlusFilter(coursesAndDurationArray));
//
// let addIDMap = coursesAndDurationArray.map((value, index) => {
//     return {id: index + 1, ...value}
// });
//
// console.log(addIDMap);

// #bolvdlhP
// подивилась в рішенні. Бо спочатку не зрозуміла завдання; потім не зрозуміла, як вивести всі карти; потім зрозуміла, що не пам'ятаю, як їх описати; потім зрозуміла, що не пам'ятаю, як їх назви перекладаються...
// самі задачі з пошуком робила самостійно. після них вже повністю передивилася рішення, тепер знаю, що в першому можна було робити find, замість filter. Це тому, що нам тільки один об'єкт потрібен?

let suits = ['spade', 'diamond', 'heart', 'club'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cards = [];

for (let suit of suits) {
    for (let value of values) {
        let card = {cardSuit: suit, cardValue: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        if (suit === 'spade' || suit === 'club') {
            card.color = 'black';
        }
        cards.push(card);
    }
}

// let AceOfSpades = cards.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace');
// console.log(AceOfSpades);
//
// let allSixes = cards.filter(card => card.cardValue === '6');
// console.log(allSixes);
//
// let allReds = cards.filter(card => card.color === 'red');
// console.log(allReds);
//
// let allDiamonds = cards.filter(card => card.cardSuit === 'diamond');
// console.log(allDiamonds);
//
// let allClubs = cards.filter(card => card.cardSuit === 'club' && card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8');
// console.log(allClubs);

// #EP5I1UUzAX
// списано з вирішення.

let cardsBySuit = cards.reduce((accum, card) => {
    switch(card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    clubs: [],
    hearts: [],
});

console.log(cardsBySuit);

// #4LJn7zBx

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sassInCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassInCourses);

let dockerInCourses = [coursesArray.filter(course => course.modules.includes('docker'))];
console.log(dockerInCourses);