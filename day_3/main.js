const fs = require('fs');
const os = require('os');

let data = fs.readFileSync('input.txt')
    .toString()
    .split(os.EOL);
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let segmentedArrays = data.map(row => [row.slice(0, row.length / 2), row.slice(row.length/2)]);
let mappedToArrays = segmentedArrays.map( row => row[0].split('').filter(c => row[1].split('').includes(c)));
let uniqueOnly = mappedToArrays.map(row => [...new Set(row)]).map(row => row[0]);
let testScore = uniqueOnly.map(item => alpha.indexOf(item) + 1).reduce((sum, x) => sum + x, 0);

let clump = data.map(item => 
    [
        data[data.indexOf(item)], 
        data[data.indexOf(item)+1], 
        data[data.indexOf(item)+2]
    ]).filter(row => !row.includes(undefined))
    .filter((value, index, Arr) => index % 3 === 0);

let multiIntersection = clump
    .map(row => row.map(item => item.split(''))) //Convert the rows into character arrays
    .map(row => row.reduce((a, b) => a.filter(c => b.includes(c))))
    .map(row => [...new Set(row)])
    .map(row => row[0])
    .map(row => alpha.indexOf(row) + 1);

let part2Score = multiIntersection.reduce((sum, x) => sum + x, 0);


console.log(part2Score);


