/**
 * Created by mike on 9/23/2015.
 */
var nums = _.sortBy([2,6,4,3,7,9]);

console.log(nums);

function position(array, index)
{
    if( _.indexOf(array, index) === -1)
        return("number not found");
    else
        return _.indexOf(array, index);
}

console.log("six: " + position(nums, 6));
console.log("2: " + position(nums, 2));
console.log("10: " + position(nums, 10));