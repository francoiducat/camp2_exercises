// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");

function deleteFile(path) {
  if(isAFile(path)){
    fs.unlinkSync(path);
    console.log("success");
    return true;
  }
  return false;
}

function isAFile(path){
  const stats = fs.lstatSync(path);
  return stats.isFile();
}

// const output = isAFile("hello");
// console.log(output);

deleteFile("hello");

module.exports = deleteFile;
