/*
    Source: Leetcode.com
    direct link to problem: https://leetcode.com/problems/sleep/description/
*/
async function sleep(millis) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, millis);
  });
}
const test = sleep(0);
/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
