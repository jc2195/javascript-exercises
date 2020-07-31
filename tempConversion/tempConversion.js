const ftoc = function(temperature) {
  let celsius = (temperature - 32) * 5/9;
  return (Math.round(celsius * 10) / 10);
}

const ctof = function(temperature) {
  let fahrenheit = (temperature * 9/5) + 32;
  return (Math.round(fahrenheit * 10) / 10);
}

module.exports = {
  ftoc,
  ctof
}
