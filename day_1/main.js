const fs = require("fs");
let split = fs.readFileSync('calories.txt').toString().split('\n');
let strange = split.map(entry=>{
    if(entry.length >0)
    {
        return entry + 'n';
    }
    else{
        return 'x'
    }
})
.join()
.replace(new RegExp(',', 'g'),'')
.split('x')
.map(item => item.split('n'))
.map(item => item.filter(i => i.length > 0))
.map(item => item.map(i => Number(i)))
.map(g=> g.reduce((partialSum, x) => partialSum + x, 0));

console.log('answer to part 1: ' + Math.max.apply(null, strange));

let sumOfTopThree = 
    strange.sort((a , b) => a - b)
    .reverse()
    .splice(0, 3)
    .reduce((partialSum, x) => partialSum + x, 0);

console.log('answer to part two : ' + sumOfTopThree);