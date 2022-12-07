const fs = require('fs');
const os = require('os');


let data = fs.readFileSync('input.txt')
    .toString()
    .split(os.EOL)
    .map(row => row.split(','))
    .map(row => row.map(item => item.split('-')))
    .map(row => row.map(item => item.map(entry => Number(entry))))
    .map(row => row.map(item => Array(item[1] - item[0] + 1).fill().map((_, idx) => item[0] + idx)));

let intersections = data.map(row => row[0].filter(c => row[1].includes(c)));
let filtered = data.map((a, idx) => [a, intersections[idx]])
                   .filter(row => row[0][0].length === row[1].length || row[0][1].length === row[1].length);

console.log(filtered.length);

let intersectionsTwo = intersections
                        .filter(row => row.length > 0);
console.log(intersectionsTwo.length);