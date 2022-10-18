/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let arrMax = Math.max(...arr);
  let arrMin = Math.min(...arr);
  let sum = 0;
  for (let x = arrMin; x <= arrMax; x++) {
    sum += x;
  }
  return sum;
}
