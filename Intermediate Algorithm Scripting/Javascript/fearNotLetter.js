/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstLetter = alphabet.indexOf(str[0]);
  let lastLetter = alphabet.indexOf(str[str.length - 1]);
  let alphaArr = alphabet.slice(firstLetter, lastLetter).split("");
  let strArr = str.split("");
  for (let x = 0; x < strArr.length; x++) {
    if (strArr.includes(alphaArr[x]) === false) {
      return alphaArr[x];
    }
  }
}
