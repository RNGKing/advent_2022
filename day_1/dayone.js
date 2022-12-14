const parseTextSync = (filePath) => {
    let fs = require("fs");
    let split = fs.readFileSync(filePath).toString().split('\n');
    return split;
};

const groupNumericData = (textArray) =>{s
    let groups = [];
    let group = [];
    for(var i = 0; i < textArray.length; i++){
        if(textArray[i].length > 0 && i < textArray.length - 1){
            group.push(Number(textArray[i]));
        }
        else if(i === textArray.length - 1){
            group.push(Number(textArray[i]));
            groups.push(group);
        }
        else{
            groups.push(group);
            group = [];
        }
    }
    return groups;
};

const groupSplitIntoNumbers = (textArray) => {
    return textArray
        .map(entry => entry > 0 ? entry + 'n' : 'x')
        .join()
        .replace(new RegExp(',', 'g'),'')
        .split('x')
        .map(item => item.split('n'))
        .map(item => item.filter(i => i.length > 0))
        .map(item => item.map(i => Number(i)))
};

const sumCalories = (textArray) => {
    return groupSplitIntoNumbers(textArray)
        .map(g=> g.reduce((partialSum, x) => partialSum + x, 0));
}

const dayOneSolution = (filePath) => {
    let textArray = parseTextSync(filePath) ;
    let sumGroup = sumCalories(textArray);

    return {
        'partOne' : Math.max.apply(null, sumGroup),
        'partTwo' : sumGroup.sort((a , b) => a - b)
                            .reverse()
                            .slice(0, 3)
                            .reduce((partialSum, x) => partialSum + x, 0)

        }
};

const outputDayOneSolution = (filePath) => {
    let result = dayOneSolution(filePath);
    console.log(`Day One -> part one answer: ${result.partOne} | part two answer: ${result.partTwo}`);
};

module.exports = {outputDayOneSolution, dayOneSolution, parseTextSync, groupNumericData};