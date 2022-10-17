/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let tempArr = [];
    let newArr = [];
    for (let x = 0; x < arr.length; x++) {
        if (x % size !== size - 1) {
            tempArr.push(arr[x])
        } else {
            tempArr.push(arr[x]);
            newArr.push(tempArr);
            tempArr = [];
        }
    }
    if (tempArr.length !== 0) {
        newArr.push(tempArr)
    }
    return newArr;
}