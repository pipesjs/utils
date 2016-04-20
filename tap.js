"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tap;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tap(func) {

  return new _pipe2.default(function (chunk) {

    // Apply
    func(chunk);
    return chunk;
  });
}

// Browserify compat
// tap :: Function -> TransformStream
// tap function takes a function as
// argument and returns a transform stream
// that applies the function to the incoming
// values before re-emitting them.
//

if (typeof module !== "undefined") module.exports = tap;