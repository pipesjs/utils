"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slice;

var _chain = require("@pipes/core/chain");

var _chain2 = _interopRequireDefault(_chain);

var _drop = require("./drop");

var _drop2 = _interopRequireDefault(_drop);

var _take = require("./take");

var _take2 = _interopRequireDefault(_take);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function slice(beg, end) {

  return (0, _chain2.default)((0, _drop2.default)(beg), (0, _take2.default)(end - beg));
}

// Browserify compat
// slice :: Int -> Int -> TransformStream
// slice function takes an int m and an int n,
// returns a transform stream
// that drops the first m values and
// takes the next m-n values
// from the input stream.
//

if (typeof module !== "undefined") module.exports = slice;