
const countSubstrings = (s) => {
    let count = 0;
    let diffCount = new Array(2 * s.length + 1).fill(0);
    diffCount[s.length] = 1;
    let diff = s.length;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            diff--;
        } else {
            diff++;
        }
        
        count += diffCount[diff];
        diffCount[diff]++;
    }

    return count;
}

// Example usage
const s = prompt("Enter a string:");
const result = countSubstrings(s);
console.log(`There are ${result} Substring`);
