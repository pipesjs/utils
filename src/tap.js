// @flow

// tap :: Function -> TransformStream
// tap function takes a function as
// argument and returns a transform stream
// that applies the function to the incoming
// values before re-emitting them.
//

import type { ReadableWritable } from "@pipes/core/streams";
import type { anyFn } from "@pipes/core/utils";

import Pipe from "@pipes/core/pipe";

export default function tap(func: anyFn): ReadableWritable {

  return new Pipe( (chunk: mixed) => {

    // Apply
    func( chunk );
    return chunk;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = tap;
