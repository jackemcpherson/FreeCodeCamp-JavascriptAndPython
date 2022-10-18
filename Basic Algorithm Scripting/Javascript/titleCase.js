/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  let strArr = str.split(/\s/);
  for (let x = 0; x < strArr.length; x++) {
    strArr[x] = strArr[x].replace(
      strArr[x].slice(0, 1),
      strArr[x].slice(0, 1).toUpperCase()
    );
    strArr[x] = strArr[x].replace(
      strArr[x].slice(1, strArr[x].length),
      strArr[x].slice(1, strArr[x].length).toLowerCase()
    );
  }
  return strArr.join(" ");
}
