/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
The answer here would be 6.
*/

//https://en.wikipedia.org/wiki/Euclidean_algorithm
function gCD(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return gCD(b, a % b);
}

//https://en.wikipedia.org/wiki/Least_common_multiple
function lCM(a, b) {
  return b * (a / gCD(a, b));
}

function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let newArr = [];
  for (let x = min; x <= max; x++) {
    newArr.push(x);
  }
  return newArr.reduce((a, b) => lCM(a, b));
}
