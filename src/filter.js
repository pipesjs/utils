// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

/**
 * This function takes a predicate function as argument and returns
 * a `transform stream` that only emits values that satisfy the predicate.
 *
 * @example
 * let readable, writable;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3,4,5,6] );
 * writable = createTestWritable( c => assert( c > 3 ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   filter( a => a > 3 ),
 *   writable
 * );
 */
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
