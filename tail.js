const fs = require('fs')

// check if src.txt exist
const fileExist = fs.existsSync(process.argv[2])
if(!fileExist){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}
// check number of argument
if(process.argv.length < 2 || process.argv.length === 4 ||process.argv.length > 6){
  console.log('usage: node tail.js [optional -n nb] file.txt')
  process.exit(1)
}

const read = fs.readFileSync(process.argv[2], 'utf-8');

let res = ((read.split('\n')).slice(-10))

res.forEach(element => {
   console.log(element)
});