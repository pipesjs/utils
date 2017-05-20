"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scan;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// scan :: Function -> Any -> TransformStream
// scan function takes a reducer function and
// an optional init value as arguments and
// returns a transform stream that applies the
// function to the incoming values and enqueues
// accumulation of the results.
//
// If an init value is not passed, the first
// incoming value is treated as one.
//

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