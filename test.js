const fs = require('fs')

let read = fs.readFileSync(process.argv[2], 'utf-8');

// number of line

let line = read.split('\n').length
if(process.argv[2] === '-l' && process.argv.length === 4){
console.log(` ${line} ${process.argv[2]}`)
}