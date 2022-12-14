/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    newArr.push(Math.max(...arr[x]));
  }
  return newArr;
}
