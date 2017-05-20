"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slice;

var _chain = require("@pipes/core/chain");

var _chain2 = _interopRequireDefault(_chain);

var _drop = require("./drop");

var _take = require("./take");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// slice :: Int -> Int -> TransformStream
// slice function takes an int m and an int n,
// returns a transform stream
// that drops the first m values and
// takes the next m-n values
// from the input stream.
//

function slice(beg, end) {

  return (0, _chain2.default)((0, _drop._drop)(beg), (0, _take._take)(end - beg));
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = slice;