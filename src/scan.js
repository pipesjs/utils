// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

/**
 * This function takes a reducer function and an optional `init` value
 * as arguments and returns a `transform stream` that applies the
 * function to the incoming values and enqueues the accumulation of the results.
 *
 * If an `init` value is not passed, the first incoming value is treated as one.
 *
 * @example
 * let readable, writable, res;
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3] );
 * writable = createTestWritable( c => {
 *   // Check last element is number
 *   let n = c[c.length-1];
 *   assert( n === +n );
 *
 *   res = c;
 * });
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   scan( add, 0 ),
 *   writable
 * ); // res[res.length-1], [1,2,3].reduce( add )
 */
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
