/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let x = 0; x < num; x++) {
    newStr += str;
  }
  return newStr;
}
