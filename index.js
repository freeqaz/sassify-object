'use strict';
var sassify = require('./sassify');

module.exports = sassVariablesFn;

/**
 * Converts a javascript object into SASS variables and prepends to given contents.
 * @param {Object} variables Object to convert to SASS variables.
 * @param {string} sassFileContents (Optional)Contents to prepend to.
 * @returns {string} Contents with variables defined.
 */
function sassVariablesFn(variables, sassFileContents) {
  sassFileContents = sassFileContents || '';

  return sassify(variables) + sassFileContents;
}
