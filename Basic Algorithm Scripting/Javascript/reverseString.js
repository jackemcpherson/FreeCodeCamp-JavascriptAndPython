/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
  let strArr = str.split("");
  strArr = strArr.reverse();
  return strArr.join("");
}
