/**
 * Formata valor recebido em Real
 * @param data
 * @returns
 */
function numberToReal(data) {
  let number = data.toFixed(2).split(".");
  number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join(".");
  return number.join(",");
}

export { numberToReal };
