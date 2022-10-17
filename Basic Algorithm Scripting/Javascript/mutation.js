/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
    let strArr1 = arr[0].toUpperCase().split("");
    let strArr2 = arr[1].toUpperCase().split("");
    for (let x = 0; x < strArr2.length; x++) {
      if (strArr1.indexOf(strArr2[x]) == -1) {
        return false;
      }
    }
    return true;
  }