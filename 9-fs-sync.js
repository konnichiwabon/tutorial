const {readFileSync, writeFileSync } = require('fs')
// or 
// const fs = require('fs');
// fs.readFileSync
// fs.writeFileSync
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the result :${first}, ${second}`, {flag: 'a'}) //flag kay para ma duha? diko sure unsay gamit sa flag 

console.log('done with this task')
console.log('starting the next one')

