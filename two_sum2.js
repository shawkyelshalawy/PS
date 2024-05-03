function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
