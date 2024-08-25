
function MovingMedian(arr) {
    const N = arr[0];
    const result = [];
    const window = [];
  
    for (let i = 1; i < arr.length; i++) {
      window.push(arr[i]);
  
      if (window.length > N) {
        window.shift();
      }
  
      const median = calculateMedian(window);
      result.push(median);
    }
  
    return result.join(',');
  }
  
  function calculateMedian(window) {
    const sortedWindow = [...window].sort((a, b) => a - b);
    const len = sortedWindow.length;
  
    if (len % 2 === 0) {
      const mid1 = sortedWindow[len / 2 - 1];
      const mid2 = sortedWindow[len / 2];
      return (mid1 + mid2) / 2;
    } else {
      return sortedWindow[Math.floor(len / 2)];
    }
  }
  
  console.log(MovingMedian([5, 2, 4, 6])); // Output: "2,3,4"
  console.log(MovingMedian([3, 0, 0, -2, 0, 2, 0, -2]));