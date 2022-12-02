const parseTextSync = (filePath) => {
    let fs = require("fs");
    let split = fs.readFileSync(filePath).toString().split('\n');
    return split;
};

const groupSplitIntoNumbers = (textArray) => {
    return textArray
        .map(entry=>{
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
};

const dayOneSolution = (filePath) => {
    let textArray = parseTextSync(filePath) ;
    let sumGroup = groupSplitIntoNumbers(textArray)
            .map(g=> g.reduce((partialSum, x) => partialSum + x, 0));


    return {
        'partOne' : Math.max.apply(null, sumGroup),
        'partTwo' : sumGroup.sort((a , b) => a - b)
                            .reverse()
                            .slice(0, 3)
                            .reduce((partialSum, x) => partialSum + x, 0)

        }
};



const outputDayOneSolution = (filePath) =>{
    let result = dayOneSolution(filePath);
    console.log(`Day One -> part one answer: ${result.partOne} | part two answer: ${result.partTwo}`);
};

module.exports = {outputDayOneSolution, dayOneSolution};