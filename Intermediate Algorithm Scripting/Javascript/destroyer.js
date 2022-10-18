/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
*/

function destroyer(arr) {
    let newArr = arguments[0];
    let delArr = [];
    for (let x = 1; x < arguments.length; x++) {
      delArr.push(arguments[x])
    }
    return newArr.filter(item => !delArr.includes(item));
  }