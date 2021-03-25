const fs = require('fs')

// command line check
if(process.argv.length < 3){
  console.log('usage: node cat-update.js file1.txt file2.txt ...')
}

for(let i=2; i< process.argv.length; i++){

 // check if the file exist
const fileExist = fs.existsSync(process.argv[i])
if(!fileExist){
  console.log(`error: ${process.argv[i]} does not exist`)
  process.exit(1)
}
 // check if it's a file
const isFile = fs.statSync(process.argv[i]) 
if(!isFile.isFile()){
  console.log('error: this is not a file')
  process.exit(1)
}



 const showFile = fs.readFileSync(process.argv[i], 'utf-8')
console.log(showFile)
}
