// @flow

// pick :: ...String -> TransformStream
// pick function takes any number of strings
// as arguments and returns a transform stream
// that extracts the passed property names from
// incoming values.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

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
