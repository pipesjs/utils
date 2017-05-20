"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = batch;

var _streams = require("@pipes/core/streams");

/**
 * This function takes an int `n` and returns a transform stream
 * that batches the incoming values in arrays of lengths no
 * more than `n`.
 *
 * @example
 * let
 *   input = [1,2,3,4,5],
 *   expected = [[1,2],[3,4],[5]];
 *
 * let readable, writable, res=[];
 *
 * // Create test streams
 * readable = createTestReadable( input );
 * writable = createTestWritable( c => res.push( c ));
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   batch( 2 ),
 *   writable
 * ); // res == expected
 */
function batch(size) {

  var acc = [];

  return new _streams.TransformStream({
    transform: function transform(chunk, controller) {
      // Add chunk to batch
      acc.push(chunk);

      // Check if batch ready
      if (!(acc.length % size)) {

        // Push acc and reset
        controller.enqueue(acc);
        acc = [];
      }
    },
    flush: function flush(controller) {
      // If any unfinished batch remains, enqueue
      if (acc.length) controller.enqueue(acc);

      controller.close();
    }
  });
}

// Browserify compat
if (typeof module !== "undefined")
  // $FlowFixMe
  module.exports = batch;