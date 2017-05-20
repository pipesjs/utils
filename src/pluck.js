// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

/**
 * This function takes a `string` as argument and returns
 * a `transform stream` that extracts the passed property from
 * incoming values.
 *
 * @example
 * let readable, writable,
 *   o = {
 *     'a': 1,
 *     'b': 2
 *   };
 *
 * // Create test streams
 * readable = createTestReadable( [o, o, o] );
 * writable = createTestWritable( c => assert( c == 1 ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   pluck('a'),
 *   writable
 * );
 */
export default function pluck(prop: string): ReadableWritable {

  return new Pipe( (chunk={}) => {

    let el: ?mixed = chunk[prop];

    if ( el !== void 0 )
      return el;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = pluck;
