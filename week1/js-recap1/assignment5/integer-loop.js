let n = parseInt(prompt('Enter a positive integer:'));

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

document.querySelector('#result').innerText = `Sum of all natural numbers up to ${n}: ${sum}`;
