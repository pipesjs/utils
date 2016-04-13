"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drop;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drop(count) {
  return new _pipe2.default(function dropper(chunk) {
    return count-- > 0 ? void 0 : chunk;
  });
}

// Browserify compat
// drop :: Int -> TransformStream
// drop function takes an int n and
// returns a transform stream
// that drops the first n values
// from the input stream.
//

if (typeof module !== "undefined") module.exports = drop;