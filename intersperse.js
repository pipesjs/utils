"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersperse;

var _pipe = require("@pipes/core/pipe");

var _pipe2 = _interopRequireDefault(_pipe);

var _chain = require("@pipes/core/chain");

var _chain2 = _interopRequireDefault(_chain);

var _drop = require("./drop");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function takes any value `a` and returns a `transform stream`
 * that intersperses the values from the input stream with the `a`.
 *
 * @example
 * let readable, writable,
 *   res = [];
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3] );
 * writable = createTestWritable( c => res.push(c) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   intersperse(0),
 *   writable
 * ); // res == [1,0,2,0,3]
 */
function intersperse(val) {
  return (0, _chain2.default)(new _pipe2.default(regeneratorRuntime.mark(function intersperser(chunk) {
    return regeneratorRuntime.wrap(function intersperser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return val;

          case 2:
            return _context.abrupt("return", chunk);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, intersperser, this);
  })), (0, _drop._drop)(1));
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = intersperse;