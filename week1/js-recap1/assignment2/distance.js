function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

let x1 = parseFloat(prompt('Enter the X coordinate of the FIRST point:'));
let y1 = parseFloat(prompt('Enter the Y coordinate of the FIRST point'));
let x2 = parseFloat(prompt('Enter the X coordinate of the SECOND point:'));
let y2 = parseFloat(prompt('Enter the Y coordinate of the SECOND point'));

let dist = distance(x1, y1, x2, y2);

document.querySelector('#result').innerText = `Distance between points (${x1}, ${y1}) and (${x2}, ${y2}) is ${dist}`;
