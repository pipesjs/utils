// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

/**
 * This function takes any number of `string`s as arguments and
 * returns a `transform stream` that extracts the passed property names from
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
 * writable = createTestWritable( c => assert( c.a ) && assert( !c.b ) );
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   pick('a'),
 *   writable
 * );
 */
export default function pick(...props: Array<string>): ReadableWritable {

  return new Pipe( (chunk={}) => {
    let res = {};

    for ( let prop of props )
      res[prop] = chunk[prop];

    return res;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = pick;
