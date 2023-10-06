/*
 Source:Leetcode 
 direct Link: https://leetcode.com/problems/counter/description/
*/
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
const counter = createCounter(10);

console.log(counter(), counter(), counter());
