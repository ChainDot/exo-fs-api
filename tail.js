const fs = require('fs')

//check command line length
if(process.argv.length !== 3){
  console.log('usage: node tail.js file.txt')
  process.exit(1)
}

// check if src.txt exist
const fileExist = fs.existsSync(process.argv[2])
if(!fileExist){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}
// check if src.txt is a file
const isFile = fs.statSync(process.argv[2]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[2]} is not a file`)
  process.exit(1)
}

const read = fs.readFileSync(process.argv[2], 'utf-8');

let res = ((read.split('\n')).slice(-10))

res.forEach(element => {
   console.log(element)
})