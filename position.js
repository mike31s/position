/**
 * Created by mike on 9/23/2015.
 */
var nums = _.sortBy([2, 6, 4, 3, 7, 9]);

console.log(nums);

function position(nums, num) {
  var cursor = 0;
  while ((nums[cursor] <= num) && (cursor < nums.length)) {
    if (nums[cursor] === num) {
      return cursor;
    }
    cursor++;
  }
  return cursor;
}

var testnums[1,3,5,6];
console.log("six: " + position(nums, 6));
console.log("2: " + position(nums, 2));
console.log("10: " + position(nums, 10));