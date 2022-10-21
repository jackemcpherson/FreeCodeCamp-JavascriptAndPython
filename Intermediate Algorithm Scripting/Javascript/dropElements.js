/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  let pass = [];
  let fail = [];
  for (let x = 0; x < arr.length; x++) {
    if (func(arr[x]) == false && fail.includes(arr[x]) == false) {
      fail.push(arr[x]);
    } else {
      pass.push(arr[x]);
    }
  }
  return pass;
}
