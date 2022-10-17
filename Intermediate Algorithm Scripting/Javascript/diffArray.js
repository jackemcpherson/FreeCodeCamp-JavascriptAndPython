/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const newArr = [];
    let compArr = arr1.concat(arr2);
    for (let x = 0; x < compArr.length; x++) {
      if (arr1.indexOf(compArr[x]) === -1 | arr2.indexOf(compArr[x]) === -1) {
        newArr.push(compArr[x]);
      }
    }
    return newArr;
  }

