"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniq;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function returns a `transform stream` that keeps only unique
 * values from the input stream and enqueues it on the output stream.
 *
 * @example
 * let readable, writable,
 *   res = [];
 *
 * // Create test streams
 * readable = createTestReadable( [1,1,2,2,3,3] );
 * writable = createTestWritable( c => res.push(c) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   uniq(),
 *   writable
 * ); // res == [1,2,3]
 */
function uniq() {
  var seen = new Set();

  return new _pipe2.default(function (chunk) {

    // Check to see if chunk seen before
    if (chunk !== void 0 && !seen.has(chunk)) {

      // Add to seen set and enqueue
      seen.add(chunk);
      return chunk;
    }
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = uniq;