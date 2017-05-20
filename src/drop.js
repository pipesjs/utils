// @flow

// drop :: Int -> TransformStream
// drop function takes an int n and
// returns a transform stream
// that drops the first n values
// from the input stream.
//

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";

export default function drop(count: number): ReadableWritable {
  return new pipe( function dropper(chunk: mixed): ?mixed {
    return ( count-- > 0 ? void 0 : chunk );
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = drop;
