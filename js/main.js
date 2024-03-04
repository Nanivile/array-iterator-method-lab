const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
const inventors1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(inventors1500s);

// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
const inventorNames = inventors.map(inventor => ({ first: inventor.first, last: inventor.last }));
console.log(inventorNames);

// 3. Sort the inventors by birth date (year property), in ascending order
const inventorsByBirthDate = inventors.sort((a, b) => a.year - b.year);
console.log(inventorsByBirthDate);

// 4. Find the inventor object with the first name of 'Ada'
const adaInventor = inventors.find(inventor => inventor.first === 'Ada');
console.log(adaInventor);

// 5. How many years did all the inventors live?
const totalYearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYearsLived);

const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
];

// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last"
const formattedNames = people.map(person => {
    const [last, first] = person.split(', ');
    return `${first} ${last}`;
});
console.log(formattedNames);

const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// 7. Count the number of instances for each of the data items
const dataCount = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(dataCount);

const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

// 8. Check if at least one person is 19 or older
const isNineteenOrOlder = devs.some(dev => (new Date().getFullYear() - dev.year) >= 19);
console.log(isNineteenOrOlder);

// 9. Check if everyone is 19 or older
const allNineteenOrOlder = devs.every(dev => (new Date().getFullYear() - dev.year) >= 19);
console.log(allNineteenOrOlder);

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// 10. Find the comment with the id of 823423
const commentWithId = comments.find(comment => comment.id === 823423);
console.log(commentWithId);

// 11. Find the index of the comment with an id of 123523
const indexWithId = comments.findIndex(comment => comment.id === 123523);
console.log(indexWithId);