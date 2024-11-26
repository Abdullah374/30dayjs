/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = fn(init, nums[i])
        init = nums[i]
    }
    
    if(nums.length === 0){
        return init
    }
    else{
        return nums.pop()
    }
};