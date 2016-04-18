// last :: TransformStream
// last function returns a transform stream
// that takes the last value from the input stream
// and enqueues it on the output stream.
//

import Accumulate from "@pipes/core/accumulate";

export default function last() {
  return new Accumulate( (a, b) => b );
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = last;

