const fs = require("fs");



let data = fs.readFileSync('calories.txt');
let split = data.toString().split('\n');
let groups = [];
let group = [];
console.log(split.length);
for(let i = 0; i < split.length; i++){

    if(split[i].length > 0 && i < split.length - 1){
        group.push(Number(split[i]));
    }
    else if(i === split.length - 1){
        
        group.push(Number(split[i]));
        groups.push(group);
    }
    else{
        groups.push(group);
        group = [];
    }
}
let mapped = groups.map(g => g.reduce((partialSum, x) => partialSum + x, 0));
let topThreeValue = mapped.sort((a,b) => a - b).reverse().slice(0, 3)
    .reduce((partialSum, a) => partialSum + a, 0);
console.log(topThreeValue);
