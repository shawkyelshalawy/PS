// Time Complexity: O(n)
// Space Complexity: O(n)

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
    if (map[t[i]] === undefined) {
      map[t[i]] = -1;
    } else {
      map[t[i]]--;
    }
  }
  for (let key in map) {
    if (map[key] !== 0) return false;
  }
  return true;
}

console.log(isAnagram('car', 'rat')); // true
