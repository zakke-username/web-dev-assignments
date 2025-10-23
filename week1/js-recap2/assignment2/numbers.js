let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(parseFloat(prompt('Enter a number:')));
}

console.log(`Numbers: [${numbers}]`);

let findNumber = parseFloat(prompt('Enter a number to search:'));
if (numbers.includes(findNumber)) {
  console.log(`${findNumber} was found in the array`);
} else {
  console.log(`${findNumber} was not found in the array`);
}

numbers.pop();
console.log(`Updated numbers: [${numbers}]`);
console.log(`Sorted numbers: [${numbers.sort((a, b) => a - b)}]`);
