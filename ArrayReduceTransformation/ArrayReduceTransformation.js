var reduce = function(nums, fn, init) {
    let curr = init;
    for (let i = 0; i < nums.length; i++) {
        curr = fn(curr, nums[i]);
    }
    return curr;
}


module.exports = reduce;