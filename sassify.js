'use strict';

module.exports = sassifyFn;

/**
 * Converts a single-depth javascript object into SASS variables.
 * @param {Object} rawObject Object to convert to SASS variables.
 * @returns {string} Sass content with variables defined.
 */
function sassifyFn(rawObject) {
  var sassified = '';

  Object.keys(rawObject).forEach(function iterateVariables(key) {
    var variable = rawObject[key];

    sassified += '$' + key + ': ' + JSON.stringify(variable) + ';\n';
  });

  return sassified;
}
