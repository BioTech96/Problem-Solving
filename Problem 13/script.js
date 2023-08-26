// Given a set of integers find all distinct sums that can be generated from to subsets of the given sets
function generateDistSums(nums) {
    const distinctSums = new Set();

    function backtrack(index, subsetSum, subset) {
        if (index === nums.length) {
            distinctSums.add(subsetSum);
            return;
        }

        backtrack(index + 1, subsetSum + nums[index], subset.concat(nums[index]));

        backtrack(index + 1, subsetSum, subset);
    }

    backtrack(0, 0, []);
    return Array.from(distinctSums).sort((a, b) => a - b);
}

// Test
const nums = [1, 2];
const result = generateDistSums(nums);
console.log(result);
