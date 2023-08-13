// user should enter array of numbers 
// and you are giving the number one 
// of the two numbers that equals the 
// sum of the given number?

function hasPairWithSum(arr, targetSum) {
    const numSet = new Set();

    for (const num of arr) {
        const complement = targetSum - num;
        if (numSet.has(complement)) {
            return true; 
        }
        numSet.add(num);
    }

    return false; 
}



// Test 
const numbers = [1, 2, 3, 4, 5];
const target = 9;

console.log(hasPairWithSum(numbers, target)); 
