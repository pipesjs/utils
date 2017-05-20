"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function takes a predicate function as argument and returns
 * a `transform stream` that only emits values that satisfy the predicate.
 *
 * @example
 * let readable, writable;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3,4,5,6] );
 * writable = createTestWritable( c => assert( c > 3 ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   filter( a => a > 3 ),
 *   writable
 * );
 */
function filter(pred) {

  return new _pipe2.default(function (chunk) {

    if (chunk !== void 0 && pred(chunk)) return chunk;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = filter;