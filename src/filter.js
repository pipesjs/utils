// @flow

// filter :: Function -> TransformStream
// filter function takes a predicate function
// as argument and returns a transform stream
// that only emits values that satisfy the predicate.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

export default function filter(pred: (?mixed) => boolean): ReadableWritable {

  return new Pipe( (chunk: mixed) => {

    if ( chunk !== void 0 && pred( chunk ) )
      return chunk;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = filter;
