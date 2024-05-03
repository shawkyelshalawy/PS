// time complexity: O(n)
// space complexity: O(n)

function encodeStrings(strs) {
  let res = '';
  for (let str of strs) {
    res += `${str.length}/${str}`;
  }
}

function decodeStrings(str) {
  let res = [];
  let i = 0;
  while (i < str.length) {
    let slashIndex = str.indexOf('/', i);
    let size = Number(str.substring(i, slashIndex));
    res.push(str.substring(slashIndex + 1, slashIndex + 1 + size));
    i = slashIndex + 1 + size;
  }
  return res;
}
