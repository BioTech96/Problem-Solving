checkPowOfTwo = (n) => {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

// Test
let n = 8;
if (checkPowOfTwo(n)) {
    console.log(`${n} is a power of 2`);
} else {
    console.log(`${n} is not a power of 2`);
}
