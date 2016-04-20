// tap :: Function -> TransformStream
// tap function takes a function as
// argument and returns a transform stream
// that applies the function to the incoming
// values before re-emitting them.
//

import Pipe from "@pipes/core/pipe";

export default function tap(func) {

  return new Pipe( chunk => {

    // Apply
    func( chunk );
    return chunk;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = tap;

