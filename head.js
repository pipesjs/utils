"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;

var _take = require("./take");

/**
 * This function returns a `transform stream` that takes the first value
 * from the input stream and enqueues it on the output stream.
 *
 * @example
 * let readable, writable, el;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3,4,5,6] );
 * writable = createTestWritable( e => { el = e; });
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   head(),
 *   writable
 * ); // el == 1
 */
function head() {
  console.log(_take._take);
  return (0, _take._take)(1);
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = head;