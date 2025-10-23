let n = parseInt(prompt('Enter a positive integer:'));

let table = document.querySelector('#result');

for (let i = 1; i <= n; i++) {
  let row = document.createElement('tr');
  for (let j = 1; j <= n; j++) {
    let data = document.createElement('td');
    let result = i * j;
    data.innerText = result;
    row.appendChild(data);
  }
  table.appendChild(row);
}
