/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let wordArr = str.trim().split(/\s/);
    let lenArr = [];
    for (let x = 0; x < wordArr.length; x++) {
      lenArr.push(wordArr[x].length);
    }
    return Math.max(...lenArr);
  }