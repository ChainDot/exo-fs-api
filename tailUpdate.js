const fs = require('fs');

// check command line exit cases
if(process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5){
  console.log('usage: node tailUpdate.js [optional -n nb] file.txt')
  process.exit(1)
}

// case with 5 arguments (optional one included)
if(process.argv.length === 5){

// exit case when process.argv[2] not equal to -n
if(process.argv[2] !== '-n'){
  console.log('usage: node tailUpdate.js -n nb file.txt')
  process.exit(1)
}

if(isNaN(process.argv[3])){
  console.log('usage: node tailUpdate.js -n nb file.txt')
  process.exit(1)
}

// check if the file exist
const fileExist = fs.existsSync(process.argv[4])
if(!fileExist){
  console.log(`error: ${process.argv[4]} does not exist`)
  process.exit(1)
}

//check if it is a file
const isFile = fs.statSync(process.argv[4]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[4]} is not a file`)
  process.exit(1)
}

// show line
const read = fs.readFileSync(process.argv[4], 'utf-8');

let res = ((read.split('\n')).slice(-(process.argv[3])))

res.forEach(element => { 
   console.log(element)
})
// case with 3 arguments node tail.js file.txt
} else if( process.argv.length === 3){
 
 // check if the file exist
const fileExist = fs.existsSync(process.argv[2])
if(!fileExist){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

//check if it is a file
const isFile = fs.statSync(process.argv[2]) 
if(!isFile.isFile()){
  console.log(`error: ${process.argv[2]} is not a file`)
  process.exit(1)
}
// show line
const read = fs.readFileSync(process.argv[2], 'utf-8');

let res = ((read.split('\n')).slice(-10))

res.forEach(element => {
   console.log(element)
});
}