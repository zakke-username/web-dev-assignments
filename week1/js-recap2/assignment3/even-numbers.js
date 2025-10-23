let numbers = [];

while (true) {
  let input = prompt('Enter a number (or "done" to finish):');
  if (input.toLowerCase() === 'done') {
    break;
  }
  numbers.push(parseFloat(input));
}

let evenNumbers = [];
for (let n of numbers) {
  if (n % 2 === 0) {
    evenNumbers.push(n);
  }
}

if (evenNumbers.length === 0) {
  document.querySelector('#output').innerText = 'No even numbers.';
} else {
  document.querySelector('#output').innerText = `Even numbers: ${evenNumbers}`;
}

