// @flow

// pluck :: String -> TransformStream
// pluck function takes a string as
// argument and returns a transform stream
// that extracts the passed property from
// incoming values.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

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
