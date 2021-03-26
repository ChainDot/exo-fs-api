const fs = require('fs')

// check argv length cant be under 3
if(process.argv.length < 3){
  console.log('usage: node cat-update.js file1.txt file2.txt ...')
  process.exit(1)
}

//loop check if is exist
for (let i = 2; i < process.argv.length ; i++){ // if dst.txt doesn t not exist => exit
  const fileExist = fs.existsSync(process.argv[i])
if(!fileExist){
  console.log(`error: ${process.argv[i]} does not exist`)
  process.exit(1)
}
}

//loop check if is a file
for (let i = 2; i < process.argv.length; i++){
  const isFile = fs.statSync(process.argv[i]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[i]} is not a file`)
  process.exit(1)
}
}

// show each process.argv[i] starting from 2
for(let i=2; i < process.argv.length; i++){

// read file
const showFile = fs.readFileSync(process.argv[i], 'utf-8')
console.log(showFile)
}




