// throttle :: Int -> TransformStream
// throttle function takes an int n and
// returns a transform stream that throttles
// the incoming values by n ms, only producing
// values every n ms and dropping the rest.
//

import { TransformStream } from "@pipes/core/streams";

export default function throttle(interval=0, head=true) {

  // Throttle state
  let ready = head, timer;

  // Set timer
  timer = global.setInterval( () => {
    ready = true;
  }, interval );

  // Return stream
  return new TransformStream({

    transform( chunk, enqueue, done ) {
      // Check if throttle ready
      if ( ready ) {

        // Push and reset
        enqueue( chunk );
        ready = false;
      }

      return done();
    },

    flush( enqueue, close ) {
      // Clear timer
      timer && global.clearInterval( timer );

      close();
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = throttle;

