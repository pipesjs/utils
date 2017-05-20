"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniq;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// uniq :: TransformStream
// uniq function returns a transform stream
// that keeps only the unique values
// from the input stream
// and enqueues it on the output stream.
//

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