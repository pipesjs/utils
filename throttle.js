"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;

var _streams = require("@pipes/core/streams");

// throttle :: Int -> Boolean -> TransformStream
// throttle function takes an int n and
// returns a transform stream that throttles
// the incoming values by n ms, only producing
// values every n ms and dropping the rest.
//

function throttle() {
  var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


  // Throttle state
  var ready = head,
      timer = void 0;

  // Set timer
  timer = global.setInterval(function () {
    ready = true;
  }, interval);

  // Return stream
  return new _streams.TransformStream({
    transform: function transform(chunk, controller) {
      // Check if throttle ready
      if (ready) {

        // Push and reset
        controller.enqueue(chunk);
        ready = false;
      }
    },
    flush: function flush(controller) {
      // Clear timer
      timer && global.clearInterval(timer);

      controller.close();
    }
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = throttle;