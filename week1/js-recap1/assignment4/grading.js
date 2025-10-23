function grade(points) {
  if (points >= 88) {
    return 5;
  } else if (points >= 76) {
    return 4;
  } else if (points >= 64) {
    return 3;
  } else if (points >= 52) {
    return 2;
  } else if (points >= 40) {
    return 1;
  } else {
    return 0;
  }
}

let points = parseFloat(prompt('Enter points (0-100):'));
document.querySelector('#result').innerText = `Grade: ${grade(points)} (${points} points)`;
