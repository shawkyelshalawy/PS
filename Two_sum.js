/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function TwoSum(nums, target) {
  if (nums.length < 2) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] == target) {
        return [j, i];
      }
    }
  }
  return 0;
}

console.log(TwoSum([2, 7, 11, 15], 12));

// Using Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
function TwoSumMap(nums, target) {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mp.has(diff)) {
      return [mp.get(diff), i];
    }
    mp.set(nums[i], i);
  }
}

console.log(TwoSumMap([3, 2, 4], 6));
