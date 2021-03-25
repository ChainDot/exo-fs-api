const fs = require('fs');

let array= []
if(process.argv.length === 5){
const read = fs.readFileSync(process.argv[4], 'utf-8');

let res = ((read.split('\n')).slice(-(process.argv[3])))

res.forEach(element => {
   console.log(element)
})
} else if( process.argv.length === 3){
  const read = fs.readFileSync(process.argv[2], 'utf-8');

let res = ((read.split('\n')).slice(-10))

res.forEach(element => {
   console.log(element)
});
}


