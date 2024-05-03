//time complexity: O(n)
//space complexity: O(n)
function Valid_palidrome(strs) {
  replaced = strs.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  reverse = replaced.split('').reverse().join('');
  return replaced === reverse;
}

console.log(Valid_palidrome('race a car'));
