evalPostfixExpression = (expression) => {
    const stack = [];

    for (const char of expression) {
        if (!isNaN(char)) {
            stack.push(parseInt(char));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            if (char === '+') {
                stack.push(operand1 + operand2);
            } else if (char === '-') {
                stack.push(operand1 - operand2);
            } else if (char === '*') {
                stack.push(operand1 * operand2);
            } else if (char === '/') {
                stack.push(Math.floor(operand1 / operand2)); 
            }
        }
    }

    return stack[0];
}

// Test 
const postfixExpression = "231*+9-";
const result = evalPostfixExpression(postfixExpression);
console.log("Result:", result); 
document.getElementById('display').innerHTML = 'Result: ' + result;
