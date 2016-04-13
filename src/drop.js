// drop :: Int -> TransformStream
// drop function takes an int n and
// returns a transform stream
// that drops the first n values
// from the input stream.
//

import pipe from "@pipes/core/pipe";

export default function drop(count) {
  return new pipe( function dropper(chunk) {
    return ( count-- > 0 ? void 0 : chunk );
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = drop;

