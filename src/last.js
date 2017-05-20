// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Accumulate from "@pipes/core/accumulate";

/**
 * This function returns a `transform stream` that takes
 * the last value from the input stream and enqueues it on the output stream.
 *
 * @example
 * let readable, writable, el;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3,4,5,6] );
 * writable = createTestWritable( e => { el = e; });
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   last(),
 *   writable
 * ); // el == 6
 */

export default function last(): ReadableWritable {
  return new Accumulate( (a: mixed, b: mixed) => b );
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = last;
