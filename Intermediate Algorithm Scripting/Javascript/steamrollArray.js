/*
Flatten a nested array.
You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      newArr.push(...steamrollArray(arr[x]));
    } else {
      newArr.push(arr[x]);
    }
  }
  return newArr;
}
