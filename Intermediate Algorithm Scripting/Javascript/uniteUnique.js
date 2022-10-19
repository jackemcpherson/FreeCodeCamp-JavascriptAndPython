/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  let newArr = [];
  for (let x = 0; x < arguments.length; x++) {
    for (let i = 0; i < arguments[x].length; i++) {
      if (newArr.includes(arguments[x][i]) === false) {
        newArr.push(arguments[x][i]);
      }
    }
  }
  return newArr;
}
