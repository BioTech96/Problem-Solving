 const isValidString = (s) => {

        const charCount = {};
        for (const char of s) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    
        let mostCommonChar, mostCommonCount;
        for (const char in charCount) {
            if (!mostCommonChar || charCount[char] > mostCommonCount) {
                mostCommonChar = char;
                mostCommonCount = charCount[char];
            }
        }
    
        const allSameCount = Object.values(charCount).every(count => count === mostCommonCount);
        if (allSameCount) {
            return false;
        }
    
        for (const char in charCount) {
            const modifiedCount = { ...charCount };
            modifiedCount[char]--;
    
            for (const c in modifiedCount) {
                if (modifiedCount[c] === 0) {
                    delete modifiedCount[c];
                }
            }
    
            const modifiedValues = Object.values(modifiedCount);
            const modifiedAllSameCount = modifiedValues.every(count => count === mostCommonCount);
            if (modifiedAllSameCount) {
                return false;
            }
        }
    
        return true;
    }
    
    // Test 
    console.log(isValidString("AndaA"));    
    console.log(isValidString("AA")); 
    console.log(isValidString("abcdefa"));  
    console.log(isValidString("aabbcc")); 
    