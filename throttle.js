"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;

var _streams = require("@pipes/core/streams");

function throttle() {
  var interval = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var head = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


  // Throttle state
  var ready = head,
      timer = void 0;

  // Set timer
  timer = global.setInterval(function () {
    ready = true;
  }, interval);

  // Return stream
  return new _streams.TransformStream({
    transform: function transform(chunk, enqueue, done) {
      // Check if throttle ready
      if (ready) {

        // Push and reset
        enqueue(chunk);
        ready = false;
      }

      return done();
    },
    flush: function flush(enqueue, close) {
      // Clear timer
      timer && global.clearInterval(timer);

      close();
    }
  });
}

// Browserify compat
// throttle :: Int -> Boolean -> TransformStream
// throttle function takes an int n and
// returns a transform stream that throttles
// the incoming values by n ms, only producing
// values every n ms and dropping the rest.
//

if (typeof module !== "undefined") module.exports = throttle;