"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scan;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function takes a reducer function and an optional `init` value
 * as arguments and returns a `transform stream` that applies the
 * function to the incoming values and enqueues the accumulation of the results.
 *
 * If an `init` value is not passed, the first incoming value is treated as one.
 *
 * @example
 * let readable, writable, res;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3] );
 * writable = createTestWritable( c => {
 *   // Check last element is number
 *   let n = c[c.length-1];
 *   assert( n === +n );
 *
 *   res = c;
 * });
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   scan( add, 0 ),
 *   writable
 * ); // res[res.length-1], [1,2,3].reduce( add )
 */
function scan(func, init) {

  var res = [],
      prev = init;

  return new _pipe2.default(function (chunk) {

    // If first value
    if (prev === void 0) {

      prev = chunk;
      return;
    }

    // Reduce and enqueue
    prev = func(prev, chunk);
    res.push(prev);

    return res;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = scan;