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

    var stringified = JSON.stringify(variable);

    // Trim off double quotes for CSS variables.
    stringified = stringified.substring(1, stringified.length - 1);

    sassified += '$' + key + ': ' + stringified + ';\n';
  });

  return sassified;
}
