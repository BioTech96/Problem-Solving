function longestPalindromicSubstring(s) {
    const t = `#${s.split('').join('#')}#`; 
    const n = t.length;
    const P = new Array(n).fill(0);
    let C = 0, R = 0;
    
    for (let i = 1; i < n - 1; i++) {
        const iMirror = 2 * C - i; 
        
        if (i < R) {
            P[i] = Math.min(R - i, P[iMirror]);
        }
        
        while (t[i + 1 + P[i]] === t[i - 1 - P[i]]) {
            P[i]++;
        }
        
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }
    
    const maxLen = Math.max(...P);
    const centerIndex = P.indexOf(maxLen);
    
    const start = Math.floor((centerIndex - maxLen) / 2);
    const end = start + maxLen;
    return s.substring(start, end);
}

// Test 
const inputString = "aaabbaa";
const result = longestPalindromicSubstring(inputString);
console.log(result); 
