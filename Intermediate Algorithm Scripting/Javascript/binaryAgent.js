/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

function binaryAgent(str) {
  return str
    .split(" ")
    .map((x) => parseInt(x, 2))
    .map((x) => String.fromCharCode(x))
    .join("");
}
