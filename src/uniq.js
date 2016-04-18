// uniq :: TransformStream
// uniq function returns a transform stream
// that keeps only the unique values
// from the input stream
// and enqueues it on the output stream.
//

import Pipe from "@pipes/core/pipe";

export default function uniq() {
  let seen = new Set;

  return new Pipe( chunk => {

    // Check to see if chunk seen before
    if ( chunk !== void 0 && !seen.has( chunk ) ) {

      // Add to seen set and enqueue
      seen.add( chunk );
      return chunk;
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = uniq;


