#!/usr/local/bin/node

const help = () =>{
    console.log('CLI app takes one argument, which is the file path to the data! Expected usage \'./main.js <path>\'');
};

let args = process.argv; 
if(args.length != 3)
{
    help();
}
else{
    const dayOne = require('./dayone.js');
    dayOne.outputDayOneSolution(args[2]);
}