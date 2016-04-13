// compact :: TransformStream
// compact function returns a transform stream
// that spits out only truthy
// values from the input stream.
//

import pipe from "@pipes/core/pipe";

export default function compact() {
  return new pipe( function compacter(chunk) {
    return ( chunk ? chunk : void 0 );
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = compact;

