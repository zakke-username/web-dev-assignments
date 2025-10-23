let side1 = parseFloat(prompt('Enter length of first side of a triangle:'));
let side2 = parseFloat(prompt('Enter length of second side:'));
let side3 = parseFloat(prompt('Enter length of third side:'));

let type = 'scalene';
if (side1 === side2 && side2 === side3) {
  type = 'equilateral';
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  type = 'isosceles';
}

document.querySelector('#result').innerText = `The triangle is ${type}.`;
