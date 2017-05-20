// @flow

// uniq :: TransformStream
// uniq function returns a transform stream
// that keeps only the unique values
// from the input stream
// and enqueues it on the output stream.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

export default function uniq(): ReadableWritable {
  let seen: Set<mixed> = new Set;

  return new Pipe( (chunk: ?mixed) => {

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
  // $FlowFixMe
  module.exports = uniq;
