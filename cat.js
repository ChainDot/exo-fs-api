const fs = require('fs')
// command line check
// check number of argument
if(process.argv.length !== 3){
  console.log('usage: node cat.js file.txt')
  process.exit(1)
}
// check if the file exist
const fileExist = fs.existsSync(process.argv[2])
if(!fileExist){
  console.log('error: this file does not exist')
  process.exit(1)
}
// check if it's a file
const isFile = fs.statSync(process.argv[2]) 
if(!isFile.isFile()){
  console.log('error: this is not a file')
  process.exit(1)
}

const showFile = fs.readFileSync(process.argv[2], 'utf-8')

console.log(showFile)