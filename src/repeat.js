// @flow

// repeat :: Any -> ReadableStream
// repeat function takes a value
// as argument and returns a readable stream
// that repeatedly emits that value.
//

import type { ReadableWritable } from "@pipes/core/streams";

import Pipe from "@pipes/core/pipe";

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
