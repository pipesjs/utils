"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluck;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pluck(prop) {

  return new _pipe2.default(function (chunk) {

    var el = chunk[prop];

    if (el !== void 0) return el;
  });
}

// Browserify compat
// pluck :: String -> TransformStream
// pluck function takes a string as
// argument and returns a transform stream
// that extracts the passed property from
// incoming values.
//

if (typeof module !== "undefined") module.exports = pluck;