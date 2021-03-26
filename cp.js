const fs = require('fs')

//check command line args
if(process.argv.length !== 4){
  console.log('usage: node cp.js src.txt dst.txt')
  process.exit(1)
}

// check if files exist
// check if src.txt exist
const fileExist1 = fs.existsSync(process.argv[2])
if(!fileExist1){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}
// check if dst.txt exist
const fileExist2 = fs.existsSync(process.argv[3])
if(!fileExist2){
  console.log(`error: ${process.argv[3]} does not exist`)
  process.exit(1)
}

// check if it's a file
// check src.txt is a file
const isFile1 = fs.statSync(process.argv[2]) 
if(!isFile1.isFile()){
  console.log(`error: ${process.argv[2]} is not a file`)
  process.exit(1)
}
//check dst.txt is a file
const isFile2 = fs.statSync(process.argv[3]) 
if(!isFile2.isFile()){
  console.log(`error: ${process.argv[3]} is not a file`)
  process.exit(1)
}
// copy file
const cp = fs.copyFileSync(process.argv[2], process.argv[3])
console.log(cp)