firstNonRepeatingChar = (s) => {
    const charCount = {}; 

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return s; 
}

// Test
const inputStr = "hello";
const result = firstNonRepeatingChar(inputStr);
console.log(result); 
