function countSubstrings(s) {
    let count = 0;
    let diffCount = new Array(s.length + 1).fill(0);
    diffCount[0] = 1;
    let diff = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            diff--;
        } else {
            diff++;
        }
        
        if (diff >= 0) {
            count += diffCount[diff];
        }
        
        diffCount[diff]++;
    }

    return count;
}

// Example usage
const s = "WomensDAY";

console.log( countSubstrings(s));
