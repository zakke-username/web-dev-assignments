function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

let inputArray = [1, 7, 9, 14, 2, 3, 4, 11];
let sortedArray = sortArray(inputArray);

console.log(`Original array: ${inputArray}`);
console.log(`Sorted array: ${sortedArray}`)
