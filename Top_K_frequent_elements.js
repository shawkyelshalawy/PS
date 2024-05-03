function topKElements(nums, k) {
  let mp = new Map();
  nums.forEach((num) => {
    mp.set(num, (mp.get(num) || 0) + 1);
  });
  let arr = Array.from(mp);
  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map((a) => a[0]);
}

console.log(topKElements([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
// another solution using
