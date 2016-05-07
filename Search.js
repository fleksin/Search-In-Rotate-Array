/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var begin = 0, end = nums.length-1;
    while(begin <= end){
        var mid= Math.floor((begin + end) / 2);
        if(target == nums[mid]) return mid;
        if(target > nums[mid]){
            if(nums[end] >= target || nums[mid]> nums[end]) begin = mid+ 1;
            else end = mid - 1;
        }
        else{
            if(nums[begin] <= target || nums[begin] > nums[mid]) end = mid - 1;
            else begin = mid + 1;
        }
    }
    
    return  -1;
};