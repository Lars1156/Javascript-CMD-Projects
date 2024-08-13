function findMin(numbers) {
    let minValue = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minValue) {
            minValue = numbers[i]; 
        }
    }

    return minValue;
}

function findMax(numbers) {
    let maxValue = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i]; 
        }
    }

    return maxValue;
}

// Example usage:
const numbers = [3, 7, 2, 9, 5, 35, 8, 1, 6 , 0 ,34];

console.log("Minimum value:", findMin(numbers)); 
console.log("Maximum value:", findMax(numbers)); 
