// @flow

import type { ReadableStreamController } from "@pipes/core/streams";

import { TransformStream } from "@pipes/core/streams";

/**
 * This function takes an int `n` and returns a `transform stream`
 * that throttles the incoming values by `n` ms, only producing
 * values every `n` ms and dropping the rest.
 */
export default function throttle(
    interval: number=0, head: boolean=true
): TransformStream {

  // Throttle state
  let ready: boolean = head,
      timer;

  // Set timer
  timer = global.setInterval( () => {
    ready = true;
  }, interval );

  // Return stream
  return new TransformStream({

    transform( chunk: mixed, controller: ReadableStreamController ) {
      // Check if throttle ready
      if ( ready ) {

        // Push and reset
        controller.enqueue( chunk );
        ready = false;
      }
    },

    flush( controller: ReadableStreamController ) {
      // Clear timer
      timer && global.clearInterval( timer );

      controller.close();
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = throttle;
