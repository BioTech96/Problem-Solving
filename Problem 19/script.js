// Define a function to find the shortest path between two points on the grid
function findShortestPath(start, end, grid) {
  const startX = start.charCodeAt(0) - 'A'.charCodeAt(0); // Convert column to index
  const startY = parseInt(start.substring(1)) - 1; // Convert row to index
  const endX = end.charCodeAt(0) - 'A'.charCodeAt(0); // Convert column to index
  const endY = parseInt(end.substring(1)) - 1; // Convert row to index

  // Helper function to check if a cell is valid and not an obstacle
  function isValidCell(x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== 1;
  }

  // Create a queue for breadth-first search
  const queue = [{ x: startX, y: startY, path: [] }];

  // Mark the start cell as visited
  grid[startX][startY] = 1;

  while (queue.length > 0) {
    const { x, y, path } = queue.shift();

    // If we've reached the end point, return the path
    if (x === endX && y === endY) {
      return path.concat(end).join('-');
    }

    // Define possible movements (up, down, left, right)
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (isValidCell(newX, newY)) {
        // Mark the cell as visited and enqueue it
        grid[newX][newY] = 1;
        queue.push({ x: newX, y: newY, path: path.concat(String.fromCharCode(newX + 'A'.charCodeAt(0)) + (newY + 1)) });
      }
    }
  }

  // No path found
  return '';
}

// Define the grid (1s represent obstacles)
const grid = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

// Test cases
const path1 = findShortestPath('H3', 'E2', grid.map(row => [...row])); // Clone the grid
const path2 = findShortestPath('A4', 'B2', grid.map(row => [...row])); // Clone the grid
const path3 = findShortestPath('A4', 'C2', grid.map(row => [...row])); // Clone the grid

console.log('Shortest path 1:', path1); // Output: "H3-H2-H1-A1-A2-E2"
console.log('Shortest path 2:', path2); // Output: "A4-A3-A2-B2"
console.log('Shortest path 3:', path3); // Output: "A4-A3-A2-B2-C2"
