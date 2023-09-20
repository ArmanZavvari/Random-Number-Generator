function generateRandomNumber(min, max) {
    if (min >= max) {
      throw new Error("Invalid range. 'min' must be less than 'max'.");
    }
    return Math.random() * (max - min) + min;
  }
  
  // Example usage:
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
  