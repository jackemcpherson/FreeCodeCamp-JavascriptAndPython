/*
Pig Latin is a way of altering English Words.
The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let newStr = "";
  let vowelRegex = /[aeiou]/gi;
  if (str[0].match(vowelRegex)) {
    newStr = str + "way";
  } else if (str.match(vowelRegex) === null) {
    newStr = str + "ay";
  } else {
    let firstVowel = str.indexOf(str.match(vowelRegex)[0]);
    newStr = str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
  }
  return newStr;
}
