// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      currentProfit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([4, 3, 6, 2, 9, 20]));
