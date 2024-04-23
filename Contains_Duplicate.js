// Brute Force Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); // true

// Using Set
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicateSet(nums) {
  const dset = new Set(nums);
  const equals = dset.length == nums.length;
  if (equals) return false;
  return true;
}

console.log(containsDuplicateSet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));

// Using Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)

function containsDuplicateSort(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicateSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));
