var twoSum = function(nums, target) {
    const numIndexes = {};
    
    for (let a = 0; a < nums.length; a++) {
        if (numIndexes[target - nums[a]] !== undefined) {
            return [numIndexes[target - nums[a]], a]
        } else {
            numIndexes[nums[a]] = a;
        }
    }
};