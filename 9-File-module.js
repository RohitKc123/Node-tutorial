const path = require('path')

console.log(path.resolve(__dirname));

const {readFileSync, writeFileSync, write, writeFile} = require('fs');
console.log('start');
const first = readFileSync('text.txt','utf8');
const second = readFileSync('text.txt','utf8');

console.log(first,second)

writeFileSync('result-sync.txt', `here is the result : ${first}, ${second}`, {flag: 'a'})
console.log('dont with this task');
console.log('starting the next one')

