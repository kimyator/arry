function calculateAverage(numbers) {
    
    if (numbers.length === 0) {
      return null; 
    }
  
    
    let sum = 0;
    for (const number of numbers) {
      sum += number;
    }
  
    return sum / numbers.length;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const average = calculateAverage(numbers);
  console.log(average); 
  