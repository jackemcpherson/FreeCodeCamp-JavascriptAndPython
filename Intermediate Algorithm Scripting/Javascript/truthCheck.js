/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects.
The predicate pre will be an object property and you need to return true if its value is truthy.
Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  let newArr = [];
  for (let x = 0; x < collection.length; x++) {
    if (collection[x].hasOwnProperty(pre) && Boolean(collection[x][pre])) {
      newArr.push(collection[x][pre]);
    }
  }
  return newArr.length == collection.length;
}
