"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// filter :: Function -> TransformStream
// filter function takes a predicate function
// as argument and returns a transform stream
// that only emits values that satisfy the predicate.
//

function filter(pred) {

  return new _pipe2.default(function (chunk) {

    if (chunk !== void 0 && pred(chunk)) return chunk;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = filter;