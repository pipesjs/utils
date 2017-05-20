"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = repeat;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// repeat :: Any -> ReadableStream
// repeat function takes a value
// as argument and returns a readable stream
// that repeatedly emits that value.
//

function repeat(value) {
  var _ref = new _pipe2.default(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!true) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return value;

          case 3:
            _context.next = 0;
            break;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }), { init: value }),
      readable = _ref.readable;

  return readable;
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = repeat;