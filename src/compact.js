// @flow

// compact :: TransformStream
// compact function returns a transform stream
// that spits out only truthy
// values from the input stream.
//

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";

export default function compact() {
  return new pipe( function compacter(chunk: mixed): ?mixed {
    return ( chunk ? chunk : void 0 );
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = compact;
