"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compact;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compact() {
  return new _pipe2.default(function compacter(chunk) {
    return chunk ? chunk : void 0;
  });
}

// Browserify compat
// compact :: TransformStream
// compact function returns a transform stream
// that spits out only truthy
// values from the input stream.
//

if (typeof module !== "undefined") module.exports = compact;