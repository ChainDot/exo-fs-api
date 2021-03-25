const fs = require('fs')
// exit cases
if(process.argv.length !== 3){
  console.log('usage: node wc.js file.txt')
  process.exit(1)
}

// check if the file exist
const fileExist = fs.existsSync(process.argv[2])
if(!fileExist){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

// check if it's a file
const isFile = fs.statSync(process.argv[2]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[2]} is not a file`)
  process.exit(1)
}

let read = fs.readFileSync(process.argv[2], 'utf-8');

// number of line
let line = read.split('\n').length


//number of word
let word = ((read.replaceAll('\n',' ')).split(' ')).length



// number of letter
let letter = (read.split('')).length


console.log(` ${line}  ${word}  ${letter} ${process.argv[2]}`)