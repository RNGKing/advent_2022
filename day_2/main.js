const fs = require('fs');
const os = require('os');

const elfMap = {
    'A' : 'ROCK',
    'B' : 'PAPER',
    'C' : 'SCISSORS'
}

const playerMap = {
    'X' : 'ROCK',
    'Y' : 'PAPER',
    'Z' : 'SCISSORS'
}

const scoreMap = {
    'ROCK' : 1,
    'PAPER' : 2,
    'SCISSORS' : 3
}

const victoryStateScoreTable = {
    'WIN' : 6,
    'DRAW' : 3,
    'LOSE' : 0
}

const playTable = {
    'PAPER': 
        {
            'PAPER' : 'DRAW',
            'SCISSORS' : 'LOSE',
            'ROCK' : 'WIN'
        },
    'SCISSORS':
        {
            'PAPER' : 'WIN',
            'SCISSORS' : 'DRAW',
            'ROCK' : 'LOSE'
        },
    'ROCK' :
        {
            'PAPER' : 'LOSE',
            'SCISSORS' : 'WIN',
            'ROCK' : 'DRAW'
        }
}; 

const realStrategyMap = {
    'DRAW' :
        {
            'ROCK' : 'ROCK',
            'PAPER' : 'PAPER',
            'SCISSORS' : 'SCISSORS'
        },
    'WIN' : 
        {
            'ROCK' : 'PAPER',
            'PAPER' : 'SCISSORS',
            'SCISSORS' : 'ROCK'
        },
    'LOSE' :
        {
            'ROCK' : 'SCISSORS',
            'PAPER' : 'ROCK',
            'SCISSORS' : 'PAPER'
        }
}

const intentMap = {
    'X' : 'LOSE',
    'Y' : 'DRAW',
    'Z' : 'WIN'
}

let data = fs.readFileSync('data.txt')
                .toString()
                .split(os.EOL)
                .map(s => s.split(' '));

let inputs = data.map(d => [elfMap[d[0]], playerMap[d[1]]]);
let wnl = inputs.map(input => [playTable[input[1]][input[0]], [input[1]]]);
let scores = wnl.map(plays => scoreMap[plays[1]] + victoryStateScoreTable[plays[0]]);
let finalScore = scores.reduce((sum, x) => sum + x, 0);
console.log('PART 1 ANSWER : ' + finalScore);

let playerIntent = data.map(d => [elfMap[d[0]], intentMap[d[1]]]);
let true_inputs = playerIntent.map(intent => [intent[0], realStrategyMap[intent[1]][intent[0]]]);
let true_wnl = true_inputs.map(input => [playTable[input[1]][input[0]], [input[1]]]);
let true_score = true_wnl.map(plays => scoreMap[plays[1]] + victoryStateScoreTable[plays[0]]);
let true_final_score = true_score.reduce((sum , x) => sum + x, 0);
console.log(true_final_score);

