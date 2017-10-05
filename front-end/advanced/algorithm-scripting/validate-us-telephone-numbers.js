/**
 * Validate US Telephone Numbers
 * Return true if the passed string is a valid US phone number
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function telephoneCheck(str) {
  // Good luck!
  return /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/.test(/-|\s|\([^]*\)/g).test(str);
}
