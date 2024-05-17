function findMax(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Example usage
  const numbers = [5, 1, 8, 3, 2];
  const max = findMax(numbers);
  console.log(max); 
  