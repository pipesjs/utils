// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";
import chain from "@pipes/core/chain";

import { _drop as drop } from "./drop";

/**
 * This function takes any value `a` and returns a `transform stream`
 * that intersperses the values from the input stream with the `a`.
 *
 * @example
 * let readable, writable,
 *   res = [];
 *
 * // Create test streams
 * readable = createTestReadable( [1,2,3] );
 * writable = createTestWritable( c => res.push(c) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   intersperse(0),
 *   writable
 * ); // res == [1,0,2,0,3]
 */
export default function intersperse(val: mixed): ReadableWritable {
  return chain(
    new pipe( function* intersperser(chunk: mixed): mixed {
      yield val;
      return chunk;
    }),
    drop(1)
  );
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = intersperse;
