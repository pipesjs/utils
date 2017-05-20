// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

/**
 * This function takes a value as argument and returns a `readable stream`
 * that repeatedly emits that value.
 *
 * @example
 * let readable, writable, val=1, len=6, sum=0;
 *
 * // Create test streams
 * readable = repeat(val);
 * writable = createTestWritable( c => { sum+=c });
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   take( len ),
 *   writable
 * ); // sum == (val * len)
 */

export default function repeat(value: mixed): ReadableWritable {

  let
  { readable } : { readable: ReadableStream } = new Pipe( function* () {
    while ( true ) {
      yield value;
    }
  }, { init: value });

  return readable;
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = repeat;
