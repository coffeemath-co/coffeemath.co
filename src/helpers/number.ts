/**
 * Round a number to a given number of decimals.
 *
 * @param value The number to round.
 * @param decimals The number of decimals to round to.
 *
 * @returns The rounded number.
 */
function round(value: number, decimals: number): number {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}

const NumberHelper = {
  round,
};

export default NumberHelper;
