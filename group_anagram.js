// Time complexity: O(m * n * log(n))
// Space complexity: O(n)
function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

/// another solution by getting the char code of each letter and add frequency of each letter to the key
// Time complexity: O(m * n)
// Space complexity: O(n)
