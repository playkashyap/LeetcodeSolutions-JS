function twoSum(nums, target) {
    let lookup = {};
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        if (lookup[diff] !== undefined) {
            console.log(lookup);
            return [lookup[diff], i];
        }
        
        lookup[nums[i]] = i;
        
    }

    return [];
}

if (require.main === module) {
    const nums = [3,2,4,5,7,30];
    const target = 37;
    const result = twoSum(nums, target);
    
    console.log('Input array:', nums);
    console.log('Target:', target);
    console.log('Indices:', result);
}