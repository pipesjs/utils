"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = last;

var _accumulate = require("@pipes/core/accumulate");

var _accumulate2 = _interopRequireDefault(_accumulate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// last :: TransformStream
// last function returns a transform stream
// that takes the last value from the input stream
// and enqueues it on the output stream.
//

function last() {
  return new _accumulate2.default(function (a, b) {
    return b;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = last;