// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

/**
 * This function returns a `transform stream` that keeps only unique
 * values from the input stream and enqueues it on the output stream.
 *
 * @example
 * let readable, writable,
 *   res = [];
 *
 * // Create test streams
 * readable = createTestReadable( [1,1,2,2,3,3] );
 * writable = createTestWritable( c => res.push(c) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   uniq(),
 *   writable
 * ); // res == [1,2,3]
 */
export default function uniq(): ReadableWritable {
  let seen: Set<mixed> = new Set;

  return new Pipe( (chunk: ?mixed) => {

    // Check to see if chunk seen before
    if ( chunk !== void 0 && !seen.has( chunk ) ) {

      // Add to seen set and enqueue
      seen.add( chunk );
      return chunk;
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = uniq;
