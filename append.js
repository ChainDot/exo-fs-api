const fs = require('fs');
let mem = ''

for (let i = 2; i < process.argv.length-1 ; i++){
  const read = fs.readFileSync(process.argv[i], 'utf-8')
  mem += read
  const append = fs.appendFileSync(process.argv[5], mem)

 console.log(append)
}

