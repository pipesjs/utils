// @flow

// last :: TransformStream
// last function returns a transform stream
// that takes the last value from the input stream
// and enqueues it on the output stream.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Accumulate from "@pipes/core/accumulate";

export default function last(): ReadableWritable {
  return new Accumulate( (a: mixed, b: mixed) => b );
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = last;
