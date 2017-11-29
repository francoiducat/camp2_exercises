// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)

const fs = require("fs");


function cutPaste(source,target){
    if (copyPaste(source,target)) {
    console.log("success");
    return deleteFile(source);
  }

  return false;
}

function deleteFile(path) {
  if(isAFile(path)){
    fs.unlinkSync(path);
    return true;
    console.log("success");
  }
  return false;
}

function copyPaste(source, target){
  if(isAFile(source)){
    const file = fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
    return true;
  }
  return false;
}

function isAFile(path){
  const stats = fs.lstatSync(path);
  return stats.isFile();
}


cutPaste("world", "world2");



module.exports = cutPaste;
