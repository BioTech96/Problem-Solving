trap =(height) => {
    if (!height || height.length === 0) {
        return 0;
    }

    const n = height.length;
    const leftMax = new Array(n);
    const rightMax = new Array(n);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return trappedWater;
}

// Test 
const arr = [3,0,0,2,0,4];
const result = trap(arr);
console.log("Trapped water:", result);
