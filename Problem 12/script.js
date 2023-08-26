
function alternatePositiveNegative(arr) {
    let posIndex = 0;
    let negIndex = 0;

    const result = [];

    for (const num of arr) {
        if (num > 0) {
            while (posIndex < arr.length && arr[posIndex] < 0) {
                posIndex++;
            }
            if (posIndex < arr.length) {
                result.push(arr[posIndex]);
                posIndex++;
            }
        } else {
            while (negIndex < arr.length && arr[negIndex] > 0) {
                negIndex++;
            }
            if (negIndex < arr.length) {
                result.push(arr[negIndex]);
                negIndex++;
            }
        }
    }

    return result;
}

// Test
const arr = [9,4,-2,-1,5,0,-5,-3,2];
const result = alternatePositiveNegative(arr);
console.log(result); 
