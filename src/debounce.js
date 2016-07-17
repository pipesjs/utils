// debounce :: Int -> Boolean -> TransformStream
// debounce function takes an int n and
// returns a transform stream that debounces
// the incoming values by n ms, only producing
// values with n ms delay between them and dropping the rest.
//

import pipe from "@pipes/core/pipe";

export default function debounce( wait=0, head=true ) {
    let
      ready = head,
      last = Date.now();

  return new pipe( function debouncer(chunk) {
    let
      now = Date.now(),
      test = ready;

    // Reset
    ready = ( now - last ) >= wait;
    last = now;

    return test ? chunk : void 0;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = debounce;

