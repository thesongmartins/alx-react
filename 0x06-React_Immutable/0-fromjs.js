const { fromJS } = require('immutable');

/**
 * converts a plain Javascript object into an immutable Map.
 * @para {oject} object -The Javascript object to convert.
 * @returns {Map} Immutable.js Map representtion of the object.
 */

function getImmutable(object) {
    return fromJS(object);
}

module.exports = getImmutableObject;