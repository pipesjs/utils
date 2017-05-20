// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";

/**
 * This function returns a transform stream that spits out only truthy
 * values from the input stream.
 *
 * @example
 * let readable, writable,
 *   count = 0;
 *
 * // Create test streams
 * readable = createTestReadable( [true, false, 0, "", "hello", 1] );
 * writable = createTestWritable( () => count++ );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   compact(),
 *   writable
 * ); // count == 3
 */
export default function compact() {
  return new pipe( function compacter(chunk: mixed): ?mixed {
    return ( chunk ? chunk : void 0 );
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = compact;
