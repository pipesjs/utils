// batch :: Int -> TransformStream
// batch function takes an int n and
// returns a transform stream that batches the
// incoming values in arrays of lengths no
// more than n.
//

import { TransformStream } from "@pipes/core/streams";

export default function batch(size) {

  let acc = [];

  return new TransformStream({

    transform( chunk, controller ) {
      // Add chunk to batch
      acc.push( chunk );

      // Check if batch ready
      if ( !( acc.length % size ) ) {

        // Push acc and reset
        controller.enqueue( acc );
        acc = [];
      }
    },

    flush( controller ) {
      // If any unfinished batch remains, enqueue
      if ( acc.length )
        controller.enqueue( acc );

      controller.close();
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = batch;
