const wrap = (line, maxLen) => {
  let returnString = "";

  for(let i = 0; i < line.length; i++){
    if(i === maxLen) returnString+="\n"
    const letter = line[i];
    returnString+=letter;
  }

  return returnString

};




module.exports = wrap;
