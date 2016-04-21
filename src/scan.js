// scan :: Function -> Any -> TransformStream
// scan function takes a reducer function and
// an optional init value as arguments and
// returns a transform stream that applies the
// function to the incoming values and enqueues
// accumulation of the results.
//
// If an init value is not passed, the first
// incoming value is treated as one.
//

import Pipe from "@pipes/core/pipe";

export default function scan(func, init) {

  let res = [], prev = init;

  return new Pipe( chunk => {

    // If first value
    if ( prev === void 0 ) {

      prev = chunk;
      return;
    }

    // Reduce and enqueue
    prev = func( prev, chunk );
    res.push( prev );

    return res;

  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = scan;

