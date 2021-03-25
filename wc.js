const fs = require('fs')
// exit cases
if(process.argv.length < 3 || process.argv.length > 4){
  console.log('usage: node wc.js (optional[-l,-w,-c]) file.txt')
  process.exit(1)
} 

// all
if(process.argv.length === 3){
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
let character = (read.split('')).length
console.log(` ${line}  ${word}  ${character} ${process.argv[2]}`)
}

// line
if(process.argv.length === 4 && process.argv[2] === '-l'){
// check if the file exist
const fileExist = fs.existsSync(process.argv[3])
if(!fileExist){
  console.log(`error: ${process.argv[3]} does not exist`)
  process.exit(1)
} 
// check if it's a file
const isFile = fs.statSync(process.argv[3]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[3]} is not a file`)
  process.exit(1)
} 

  let read = fs.readFileSync(process.argv[3], 'utf-8')
  let line = read.split('\n').length
  console.log(` ${line} ${process.argv[3]}`)
} else {
  console.log(`error: ${process.argv[2]} does not exist`)
}

// word
if (process.argv.length === 4 && process.argv[2] === '-w'){
 // check if the file exist 
  const fileExist = fs.existsSync(process.argv[3])
if(!fileExist){
  console.log(`error: ${process.argv[3]} does not exist`)
  process.exit(1)
}
// check if it's a file
const isFile = fs.statSync(process.argv[3]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[3]} is not a file`)
  process.exit(1)
} 

  let read = fs.readFileSync(process.argv[3], 'utf-8')
  let word = ((read.replaceAll('\n',' ')).split(' ')).length
  console.log(` ${word} ${process.argv[3]}`)
} 

//character
if (process.argv.length === 4 && process.argv[2] === '-c'){
  // check if the file exist 
const fileExist = fs.existsSync(process.argv[3])
if(!fileExist){
  console.log(`error: ${process.argv[3]} does not exist`)
  process.exit(1)
} 
// check if it's a file
const isFile = fs.statSync(process.argv[3]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[3]} is not a file`)
  process.exit(1)
} 

  let read = fs.readFileSync(process.argv[3], 'utf-8')
  let character = (read.split('')).length
  console.log(` ${character} ${process.argv[3]}`)
}



/* console.log(` ${line} ${process.argv[2]}`)
console.log(` ${word} ${process.argv[2]}`)
console.log(` ${letter} ${process.argv[2]}`) */