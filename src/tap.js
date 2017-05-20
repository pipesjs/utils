// @flow

import type { ReadableWritable } from "@pipes/core/streams";
import type { anyFn } from "@pipes/core/utils";

import Pipe from "@pipes/core/pipe";

/**
 * This function takes a function as rgument and returns
 * a `transform stream` that applies the function to the incoming
 * values before re-emitting them.
 *
 * @example
 * let readable, writable;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3] );
 * writable = createTestWritable( c => assert( !Number.isNaN( c*1 ) ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   tap( console.log.bind(console) ),
 *   writable
 * );
 */
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
