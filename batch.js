"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = batch;

var _streams = require("@pipes/core/streams");

function batch(size) {

  var acc = [];

  return new _streams.TransformStream({
    transform: function transform(chunk, enqueue, done) {
      // Add chunk to batch
      acc.push(chunk);

      // Check if batch ready
      if (!(acc.length % size)) {

        // Push acc and reset
        enqueue(acc);
        acc = [];
      }

      return done();
    },
    flush: function flush(enqueue, close) {
      // If any unfinished batch remains, enqueue
      if (acc.length) enqueue(acc);

      close();
    }
  });
}

// Browserify compat
// batch :: Int -> TransformStream
// batch function takes an int n and
// returns a transform stream that batches the
// incoming values in arrays of lengths no
// more than n.
//

if (typeof module !== "undefined") module.exports = batch;