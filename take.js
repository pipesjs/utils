"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = take;

var _streams = require("@pipes/core/streams");

function take(count) {
  var
  // Function that writes chunks to readable
  write = void 0,
      writeFn = function writeFn(controller) {
    return function (chunk) {
      return count-- > 0 ? controller.enqueue(chunk) : controller.close();
    };
  },


  // Error handler for writable
  error = void 0,
      errorFn = function errorFn(controller) {
    return function (e) {
      return controller.error(e);
    };
  },


  // Cleanup fn for writable
  close = void 0,
      closeFn = function closeFn(controller) {
    return function () {
      return controller.close();
    };
  },


  // Readable
  readable = new _streams.ReadableStream({
    start: function start(controller) {
      // Init pass and err function
      write = writeFn(controller);
      error = errorFn(controller);
      close = closeFn(controller);
    }
  }),


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

// Browserify compat
// take :: Int -> { readable, writable }
// take function takes an int n and
// returns a transform stream
// that takes the first n values
// from the input stream.
//

if (typeof module !== "undefined") module.exports = take;