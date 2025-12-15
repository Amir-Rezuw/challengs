const exceptions = ["IV", "IX", "XL", "XC", "CD", "CM"];
const exceptionsWithValue = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
const romanNumbersAndValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let romanNumber = s.split("").reverse();
  let result = 0;
  console.log(romanNumber);
  let rn0;
  let rn1;
  romanNumber.map((item, i) => {
    rn0 = romanNumbersAndValue[s[i]];
    rn1 = romanNumbersAndValue[s[i - 1]];

    if (rn1 < rn0) {
      result += rn0 - rn1;
      i--;
    } else {
      result += rn0;
    }
  });
  return result;
};
console.log(romanToInt("MCMXCIV"));
