// user should enter array of numbers 
// and you are giving the number one 
// of the two numbers that equals the 
// sum of the given number?

function hasPairWithSum(arr, targetSum) {
    const numSet = new Set();

    for (const num of arr) {
        const complement = targetSum - num;
        if (numSet.has(complement)) {
            return true; // Found a pair that sums to the target
        }
        numSet.add(num);
    }

    return false; // No such pair was found
}



// Test cases
const numbers = [1, 2, 3, 4, 5];
const target = 9;

console.log(hasPairWithSum(numbers, target)); // Output: true (3 + 6 = 9)
