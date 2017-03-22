// throttle :: Int -> Boolean -> TransformStream
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

    transform( chunk, controller ) {
      // Check if throttle ready
      if ( ready ) {

        // Push and reset
        controller.enqueue( chunk );
        ready = false;
      }
    },

    flush( controller ) {
      // Clear timer
      timer && global.clearInterval( timer );

      controller.close();
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = throttle;
