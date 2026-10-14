// Task 11: Utility Functions

// Delay function
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Counter function
export function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}