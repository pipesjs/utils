"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = last;

var _accumulate = require("@pipes/core/accumulate");

var _accumulate2 = _interopRequireDefault(_accumulate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function last() {
  return new _accumulate2.default(function (a, b) {
    return b;
  });
}

// Browserify compat
// last :: TransformStream
// last function returns a transform stream
// that takes the last value from the input stream
// and enqueues it on the output stream.
//

if (typeof module !== "undefined") module.exports = last;