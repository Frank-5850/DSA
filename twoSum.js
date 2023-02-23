// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let targetNum = target - nums[i];
    if (targetNum in map) {
      return [map[targetNum], i];
    }
    map[nums[i]] = i;
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 4, 1, 3, 4], 7));
