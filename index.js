function convertToCelsius(f) {
  const c = (f - 32) * (5 / 9);
  return c;
}

function describeTemperature(f) {
  const c = convertToCelsius(f);
  let description = "";
  if (c < 0) {
    description = "very cold ";
  } else if (c < 20) {
    description = "cold";
  } else if (c < 30) {
    description = "warm";
  } else if (c < 40) {
    description = "hot";
  } else {
    description = "very hot";
  }
  return `${f}F is ${c}C. That is ${description}.`;
}

const f = prompt("Please enter a temperature in Fahrenheit");
const description = describeTemperature(f);
alert(description);
