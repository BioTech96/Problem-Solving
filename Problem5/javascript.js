
function countFractionsSum(numerator, denominator) {
    let count = 0;
    const totFrac = numerator.length;

    for (let i = 0; i < totFrac; i++) {
        for (let j = i + 1; j < totFrac; j++) {
            if ((numerator[i] * denominator[j] + numerator[j] * denominator[i]) === (denominator[i] * denominator[j])) {
                count++;
            }
        }
    }

    return count;
}

const numerator = [1, 2, 2, 8];
const denominator = [2, 4, 6, 12];

const result = countFractionsSum(numerator, denominator);
console.log("Number of fractions whose sum equals 1:", result);
