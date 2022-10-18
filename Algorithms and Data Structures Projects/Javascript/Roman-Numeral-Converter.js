/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	            1000
CM	            900
D	            500
CD	            400
C	            100
XC	            90
L	            50
XL	            40
X	            10
IX	            9
V	            5
IV	            4
I	            1

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
  let m = ["", "M", "MM", "MMM"];
  let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let numSplit = num.toString().split("");

  if (numSplit.length === 4) {
    return [
      m[numSplit[0]],
      c[numSplit[1]],
      x[numSplit[2]],
      i[numSplit[3]],
    ].join("");
  }
  if (numSplit.length === 3) {
    return [c[numSplit[0]], x[numSplit[1]], i[numSplit[2]]].join("");
  }
  if (numSplit.length === 2) {
    return [x[numSplit[0]], i[numSplit[1]]].join("");
  }
  if (numSplit.length === 1) {
    return [i[numSplit[0]]].join("");
  } else {
    return "invalid";
  }
}
