/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x]) {
      newArr.push(arr[x]);
    }
  }
  return newArr;
}
