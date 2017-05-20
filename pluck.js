"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluck;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pluck :: String -> TransformStream
// pluck function takes a string as
// argument and returns a transform stream
// that extracts the passed property from
// incoming values.
//

function pluck(prop) {

  return new _pipe2.default(function () {
    var chunk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var el = chunk[prop];

    if (el !== void 0) return el;
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = pluck;