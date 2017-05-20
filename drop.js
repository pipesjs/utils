"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._drop = undefined;
exports.default = drop;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// drop :: Int -> TransformStream
// drop function takes an int n and
// returns a transform stream
// that drops the first n values
// from the input stream.
//

function drop(count) {
  return new _pipe2.default(function dropper(chunk) {
    return count-- > 0 ? void 0 : chunk;
  });
}

// FIXME: Internal flow.js resolution problem workaround
var _drop = exports._drop = drop;
drop._drop = drop;

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = drop;