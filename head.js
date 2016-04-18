"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;

var _take = require("./take");

var _take2 = _interopRequireDefault(_take);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function head() {
  return (0, _take2.default)(1);
}

// Browserify compat
// head :: TransformStream
// head function returns a transform stream
// that takes the first value from the input stream
// and enqueues it on the output stream.
//

if (typeof module !== "undefined") module.exports = head;