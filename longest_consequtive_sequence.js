function longestConsecutive(nums) {
  let mx = 0;
  const numSet = new Set(nums);

  for (let num of numSet) {
    const prevNum = num - 1;

    if (numSet.has(prevNum)) continue;

    let [curr, score] = [num, 1];

    const isStreak = () => numSet.has(curr + 1);
    while (isStreak()) {
      curr++;
      score++;
    }

    mx = Math.max(mx, score);
  }

  return mx;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
