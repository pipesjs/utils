"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = head;

var _take = require("./take");

// head :: TransformStream
// head function returns a transform stream
// that takes the first value from the input stream
// and enqueues it on the output stream.
//

function head() {
  console.log(_take._take);
  return (0, _take._take)(1);
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = head;