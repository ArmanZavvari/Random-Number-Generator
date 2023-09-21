function generateRandomNaturalNumberWithExclusions(min, max, exclusions) {
  if (min >= max || min < 0) {
    throw new Error("Invalid range. 'min' must be a non-negative number less than 'max'.");
  }

  const availableNumbers = [];
  for (let i = min; i < max; i++) {
    if (!exclusions.includes(i)) {
      availableNumbers.push(i);
    }
  }

  if (availableNumbers.length === 0) {
    throw new Error("No available numbers within the specified range after exclusions.");
  }

  const randomIndex = Math.floor(Math.random() * availableNumbers.length);
  return availableNumbers[randomIndex];
}

// Example usage:
const min = 1; // Minimum value (inclusive)
const max = 100; // Maximum value (exclusive)
const exclusions = [5, 10, 15]; // Numbers to exclude
const randomNaturalNumber = generateRandomNaturalNumberWithExclusions(min, max, exclusions);
console.log(`Random natural number between ${min} and ${max} (excluding ${exclusions.join(', ')}): ${randomNaturalNumber}`);
