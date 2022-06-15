function numberToReal(e) {
  let number = e.toFixed(2).split(".");
  number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join(".");
  return number.join(",");
}

export { numberToReal };
