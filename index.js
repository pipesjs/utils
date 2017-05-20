"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniq = exports.throttle = exports.tap = exports.take = exports.slice = exports.scan = exports.repeat = exports.pluck = exports.pick = exports.last = exports.intersperse = exports.head = exports.filter = exports.drop = exports.debounce = exports.cycle = exports.compact = exports.batch = undefined;

var _core = require("@pipes/core");

var _core2 = _interopRequireDefault(_core);

var _batch = require("./batch");

var _batch2 = _interopRequireDefault(_batch);

var _compact = require("./compact");

var _compact2 = _interopRequireDefault(_compact);

var _cycle = require("./cycle");

var _cycle2 = _interopRequireDefault(_cycle);

var _debounce = require("./debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _drop = require("./drop");

var _drop2 = _interopRequireDefault(_drop);

var _filter = require("./filter");

var _filter2 = _interopRequireDefault(_filter);

var _head = require("./head");

var _head2 = _interopRequireDefault(_head);

var _intersperse = require("./intersperse");

var _intersperse2 = _interopRequireDefault(_intersperse);

var _last = require("./last");

var _last2 = _interopRequireDefault(_last);

var _pick = require("./pick");

var _pick2 = _interopRequireDefault(_pick);

var _pluck = require("./pluck");

var _pluck2 = _interopRequireDefault(_pluck);

var _repeat = require("./repeat");

var _repeat2 = _interopRequireDefault(_repeat);

var _scan = require("./scan");

var _scan2 = _interopRequireDefault(_scan);

var _slice = require("./slice");

var _slice2 = _interopRequireDefault(_slice);

var _take = require("./take");

var _take2 = _interopRequireDefault(_take);

var _tap = require("./tap");

var _tap2 = _interopRequireDefault(_tap);

var _throttle = require("./throttle");

var _throttle2 = _interopRequireDefault(_throttle);

var _uniq = require("./uniq");

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Exports
exports.batch = _batch2.default;
exports.compact = _compact2.default;
exports.cycle = _cycle2.default;
exports.debounce = _debounce2.default;
exports.drop = _drop2.default;
exports.filter = _filter2.default;
exports.head = _head2.default;
exports.intersperse = _intersperse2.default;
exports.last = _last2.default;
exports.pick = _pick2.default;
exports.pluck = _pluck2.default;
exports.repeat = _repeat2.default;
exports.scan = _scan2.default;
exports.slice = _slice2.default;
exports.take = _take2.default;
exports.tap = _tap2.default;
exports.throttle = _throttle2.default;
exports.uniq = _uniq2.default;

// Default exports

var fns = {
  batch: _batch2.default,
  compact: _compact2.default,
  cycle: _cycle2.default,
  debounce: _debounce2.default,
  drop: _drop2.default,
  filter: _filter2.default,
  head: _head2.default,
  intersperse: _intersperse2.default,
  last: _last2.default,
  pick: _pick2.default,
  pluck: _pluck2.default,
  repeat: _repeat2.default,
  scan: _scan2.default,
  slice: _slice2.default,
  take: _take2.default,
  tap: _tap2.default,
  throttle: _throttle2.default,
  uniq: _uniq2.default
};

// Export to window
if (typeof window !== "undefined") window.Pipes = window.Pipes || _core2.default;
Object.assign(window.Pipes, {
  utils: fns
});

exports.default = fns;