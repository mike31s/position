/**
 * Created by mike on 9/23/2015.
 */
/* exported position, testnums*/

/**
 * Finds the postioin in array of nums where num should be inserted
 * @param nums the array of numbers
 * @param num the number to be inserted
 * @returns {number} the position where it should be
 */
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

