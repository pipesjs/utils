// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";

/**
 * This function takes an int `n` and returns a `transform stream`
 * that drops the first `n` values from the input stream.
 *
 * @example
 * let readable, writable,
 *   count = 0;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3,4,5,6] );
 * writable = createTestWritable( () => count++ );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   drop(3),
 *   writable
 * ); // count == 3
 */
export default function drop(count: number): ReadableWritable {
  return new pipe( function dropper(chunk: mixed): ?mixed {
    return ( count-- > 0 ? void 0 : chunk );
  });
}

// FIXME: Internal flow.js resolution problem workaround
export const _drop = drop;
drop._drop = drop;

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = drop;
