// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function (x) {
  const stringArray = x.toString().split("");
  let newArray = [];
  for (let i = stringArray.length - 1; i >= 0; i--) {
    newArray.push(stringArray[i]);
  }
  let reverseNum = parseInt(newArray.join(""));
  if (reverseNum > 2 ** 31 - 1) {
    return 0;
  }
  return x < 0 ? reverseNum * -1 : reverseNum;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
