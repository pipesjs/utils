// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import chain from "@pipes/core/chain";

import { _drop as drop } from "./drop";
import { _take as take } from "./take";

/**
 * This function takes an int `m` and an int `n` and returns
 * a `transform stream` that drops the first `m` values and
 * takes the next `(m-n)` values from the input stream.
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
 *   slice(2,5),
 *   writable
 * ); // count == 3
 */
export default function slice(beg: number, end: number): ReadableWritable {

  return chain(
    drop( beg ),
    take( end - beg )
  );

}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = slice;
