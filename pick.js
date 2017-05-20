"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pick;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function takes any number of `string`s as arguments and
 * returns a `transform stream` that extracts the passed property names from
 * incoming values.
 *
 * @example
 * let readable, writable,
 *   o = {
 *     'a': 1,
 *     'b': 2
 *   };
 *
 * // Create test streams
 * readable = createTestReadable( [o, o, o] );
 * writable = createTestWritable( c => assert( c.a ) && assert( !c.b ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   pick('a'),
 *   writable
 * );
 */
function pick() {
  for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  return new _pipe2.default(function () {
    var chunk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var res = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var prop = _step.value;

        res[prop] = chunk[prop];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return res;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = pick;