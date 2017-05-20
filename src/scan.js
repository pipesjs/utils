// @flow

// scan :: Function -> Any -> TransformStream
// scan function takes a reducer function and
// an optional init value as arguments and
// returns a transform stream that applies the
// function to the incoming values and enqueues
// accumulation of the results.
//
// If an init value is not passed, the first
// incoming value is treated as one.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

export default function scan<T1,T2>(
    func: (?T2 | ?T1, ?T1)=>T2,
    init: ?T1
): ReadableWritable {

  let res: Array<T2> = [], prev: ?T1 | ?T2 = init;

  return new Pipe( (chunk: T1) => {

    // If first value
    if ( prev === void 0 ) {

      prev = chunk;
      return;
    }

    // Reduce and enqueue
    prev = func( prev, chunk );
    res.push( prev );

    return res;

  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = scan;
