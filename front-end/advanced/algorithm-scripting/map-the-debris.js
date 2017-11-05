/**
 * Map the Debris
 * Return a transformed array of average altitude into their orbital periods.
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

/**
 * Returns orbital period in seconds utilising Kepler's Law
 * given `a` is the orbit's semi-major axis in meters and
 * `GM` is the standard gravitational parameter
 */
function T(a, GM) {
  return 2 * Math.PI *
    Math.sqrt(Math.pow(a, 3) / GM);
}

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(element => {
    element.orbitalPeriod =
      Math.round(T(earthRadius + element.avgAlt, GM));
    delete element.avgAlt;
    return element;
  });
}
