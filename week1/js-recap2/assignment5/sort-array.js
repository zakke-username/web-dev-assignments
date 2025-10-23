function sortArray(arr, order) {
  if (order === 'asc') {
    return arr.slice().sort((a, b) => a - b);
  } else if (order === 'desc') {
    return arr.slice().sort((a, b) => b - a);
  }
}

let inputArray = [32, 7, 9, 14, 2, 3, 4, 11];
let ascSorted = sortArray(inputArray, 'asc');
let descSorted = sortArray(inputArray, 'desc');

console.log(`Original array: [${inputArray}]`);
console.log(`Sorted array (lowest to highest): [${ascSorted}]`)
console.log(`Sorted array (highest to lowest): [${descSorted}]`)
