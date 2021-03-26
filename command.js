const fs = require('fs')

// check isFileExist
exports.isFileExist = (nb) =>{
  return fs.existsSync(process.arg[nb])
}

// check isFile
exports.isFile = (nb) =>{
  return (fs.statSync(process.argv[nb])).isFile
}

