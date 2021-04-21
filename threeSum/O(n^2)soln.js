var threeSum = function(nums) {
    const results = [];
    if (nums.length < 3) return results;

    nums = nums.sort((a, b) => {
        if (a < b) return -1

        if (a === b) return 0

        if (a > b) return 1
    })
    
    let pointerLeft;
    let pointerRight;
    let pointerSum;
    
    for (let i = 0; i < nums.length - 2; i++) {
        pointerLeft = i + 1;
        pointerRight = nums.length - 1;
        pointerSum = nums[i] + nums[pointerLeft] + nums[pointerRight];

        while (pointerLeft < pointerRight) {
            if (pointerSum === 0) {
                if (nums[i] !== nums[i-1] && nums[pointerRight] !== nums[pointerRight+1]) {
                    results.push([nums[i], nums[pointerLeft], nums[pointerRight]])
                }
                pointerRight--;
            } else if (pointerSum < 0) {   
                pointerLeft++;
            } else if (pointerSum > 0) {
                pointerRight--;
            }
            pointerSum = nums[i] + nums[pointerLeft] + nums[pointerRight];
        } 
    }
    return results
}