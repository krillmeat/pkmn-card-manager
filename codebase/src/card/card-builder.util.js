const ROW_LENGTH = 29;

const buildRows = (text,overrideLength) => {
  let rowsList = [];
  if(!text) return 0;
  let wordList = text.split(" ");

  let currentLine = "";

  // Go through the words and determine how many words are on each line
  for(let i in wordList){
    let word = wordList[i];
    let wordLength = word.length;
    if(currentLine.length + wordLength + 1 > (overrideLength || ROW_LENGTH)){
      rowsList.push(currentLine);
      currentLine = word;
    }else{ currentLine += ` ${word}`; if(i === 0) currentLine.substring(1) }
  }

  return rowsList;
}

export const getNumberOfRows = (text,overrideLength) => buildRows(text,overrideLength).length + 1;

// export const getTotalEffectSize = (effects,overrideLength) => {
//   let one = buildRows(effects[0].text)
// }