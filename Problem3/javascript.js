function calculateVolume() {
    const height = parseFloat(document.getElementById('height').value);
    const radius = parseFloat(document.getElementById('radius').value);

    if (!isNaN(height) && !isNaN(radius)) {
        const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
        document.getElementById('result').textContent = `The volume of the cone is: ${volume.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Invalid input. Please enter valid numbers.';
    }
}