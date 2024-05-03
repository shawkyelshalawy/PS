function productExceptSelf(nums) {
  let ans = [];
  let sz = nums.length;
  let prefix = new Array(sz).fill(1);
  let postfix = new Array(sz).fill(1);
  for (let i = 1; i < sz; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  for (let i = sz - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < sz; i++) {
    ans.push(prefix[i] * postfix[i]);
  }
  return ans;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
