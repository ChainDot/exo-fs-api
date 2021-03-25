const fs = require('fs')

// check if src.txt exist
const fileExist = fs.existsSync(process.argv[2])
if(!fileExist){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

//check command line args
if(process.argv.length !== 4){
  console.log('usage: node cp.js src.txt dst.txt')
  process.exit(1)
}

// check if it's a file
const isFile = fs.statSync(process.argv[2]) 
if(!isFile.isFile()){
  console.log('error: this is not a file')
  process.exit(1)
}

const cp = fs.copyFileSync(process.argv[2], process.argv[3])

console.log(cp)