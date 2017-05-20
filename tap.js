"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tap;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function takes a function as rgument and returns
 * a `transform stream` that applies the function to the incoming
 * values before re-emitting them.
 *
 * @example
 * let readable, writable;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3] );
 * writable = createTestWritable( c => assert( !Number.isNaN( c*1 ) ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   tap( console.log.bind(console) ),
 *   writable
 * );
 */
function tap(func) {

  return new _pipe2.default(function (chunk) {

    // Apply
    func(chunk);
    return chunk;
  });
}

// Browserify compat


if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = tap;