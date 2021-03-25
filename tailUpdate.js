const fs = require('fs');
// nb args check
if(process.argv.length < 3 || process.argv.length === 4 || process.argv.length > 5){
  console.log('usage: node tailUpdate.js [optional -n nb] file.txt')
  process.exit(1)
}


if(process.argv.length === 5){
const fileExist = fs.existsSync(process.argv[4])
if(process.argv[2] !== '-n'){
  console.log('usage: node tailUpdate.js [optional -n nb] file.txt')
  process.exit(1)
}
if(isNaN(process.argv[3])){
  console.log('usage: node tailUpdate.js [optional -n nb] file.txt')
  process.exit(1)
}

if(!fileExist){
  console.log(`error: ${process.argv[4]} does not exist`)
  process.exit(1)
}

const read = fs.readFileSync(process.argv[4], 'utf-8');

let res = ((read.split('\n')).slice(-(process.argv[3])))

res.forEach(element => {
   console.log(element)
})

} else if( process.argv.length === 3){
  const fileExist = fs.existsSync(process.argv[2])

if(!fileExist){
  console.log(`error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

  const read = fs.readFileSync(process.argv[2], 'utf-8');

let res = ((read.split('\n')).slice(-10))

res.forEach(element => {
   console.log(element)
});
}


