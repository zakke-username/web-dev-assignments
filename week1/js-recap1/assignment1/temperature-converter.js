function celsiusToFahrenheit(degrees) {
  return (degrees * (9 / 5)) + 32;
}

function celsiusToKelvin(degrees) {
  return degrees + 273.15;
}

let celsius = parseFloat(prompt('Enter degrees in celsius for conversion:'));

document.querySelector('#input').innerText = `Input = ${celsius}`;
document.querySelector('#fahrenheit').innerText = `Fahrenheit degrees = ${celsiusToFahrenheit(celsius)}`;
document.querySelector('#kelvin').innerText = `Degrees in Kelvin = ${celsiusToKelvin(celsius)}`;
