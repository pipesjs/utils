"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compact;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function returns a transform stream that spits out only truthy
 * values from the input stream.
 *
 * @example
 * let readable, writable,
 *   count = 0;
 *
 * // Create test streams
 * readable = createTestReadable( [true, false, 0, "", "hello", 1] );
 * writable = createTestWritable( () => count++ );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   compact(),
 *   writable
 * ); // count == 3
 */
function compact() {
  return new _pipe2.default(function compacter(chunk) {
    return chunk ? chunk : void 0;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = compact;