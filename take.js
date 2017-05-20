"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._take = undefined;
exports.default = take;

var _streams = require("@pipes/core/streams");

// take :: Int -> { readable, writable }
// take function takes an int n and
// returns a transform stream
// that takes the first n values
// from the input stream.
//

function take(count) {
  var readable = void 0,
      writable = void 0,


  // Cleanup fn for writable
  close = void 0,
      closeFn = function closeFn(controller) {
    return function () {
      !controller._closeRequested && controller.close();
    };
  },


  // Function that writes chunks to readable
  write = void 0,
      writeFn = function writeFn(controller) {
    return function (chunk) {
      if (count-- > 0) {
        return controller.enqueue(chunk);
      }

      close();
      writable._writer.close();
    };
  },


  // Error handler for writable
  error = void 0,
      errorFn = function errorFn(controller) {
    return controller.error.bind(controller);
  };

  // Readable
  readable = new _streams.ReadableStream({
    start: function start(controller) {
      // Init pass and err function
      write = writeFn(controller);
      error = errorFn(controller);
      close = closeFn(controller);
    }
  });

  // Writable
  writable = new _streams.WritableStream({
    write: write,
    close: close,
    error: error
  });

  return {
    readable: readable,
    writable: writable
  };
}

// FIXME: Internal flow.js resolution problem workaround
var _take = exports._take = take;

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = take;