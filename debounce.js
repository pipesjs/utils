"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function debounce() {
  var wait = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var head = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  var ready = head,
      last = Date.now();

  return new _pipe2.default(function debouncer(chunk) {
    var now = Date.now(),
        test = ready;

    // Reset
    ready = now - last >= wait;
    last = now;

    return test ? chunk : void 0;
  });
}

// Browserify compat
// debounce :: Int -> Boolean -> TransformStream
// debounce function takes an int n and
// returns a transform stream that debounces
// the incoming values by n ms, only producing
// values with n ms delay between them and dropping the rest.
//

if (typeof module !== "undefined") module.exports = debounce;