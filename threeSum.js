function threeSum(nums) {
    let result = [];
    let length = nums.length;
    const sortedArr = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

        let left = i + 1;
        let right = length - 1;

        while (left < right) {
            const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
            if (sum == 0) {

                result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);

                while (left < right && sortedArr[left] === sortedArr[left + 1]) left++;
                while (left < right && sortedArr[right] === sortedArr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

const nums = [-1, -2, -3, 0, 1, 2, 3, 4];

console.log(threeSum(nums));