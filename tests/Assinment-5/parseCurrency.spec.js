// Converts currency string like "$1,111" to number 1111
function parseCurrency(text) {
  if (!text) return 0;
  return Number(text.replace(/[^0-9.-]+/g, ''));
}

module.exports = { parseCurrency };
