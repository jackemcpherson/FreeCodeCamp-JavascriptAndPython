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

  return (
    m[Math.floor(num / 1000)] +
    c[Math.floor((num % 1000) / 100)] +
    x[Math.floor((num % 100) / 10)] +
    i[num % 10]
  );
}
