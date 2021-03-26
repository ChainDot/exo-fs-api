const fs = require('fs');

// check command line length
if(process.argv.length < 3){
  console.log('usage : node append.js src1.txt [optional: scrc2.txt...] dst.txt')
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

// for each iteration of process.argv
for (let i = 2; i < process.argv.length-1 ; i++){
  let tmp = ''
  // read each iteration of argv, starting from 2 and skipping the last item of the array
  const read = fs.readFileSync(process.argv[i], 'utf-8')
  tmp += read + "\n"
  // write on the last iteration of the array process.argv
  const append = fs.appendFileSync((process.argv[process.argv.length-1]), tmp)

 console.log(append)
}

