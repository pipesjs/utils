// repeat :: Any -> ReadableStream
// repeat function takes a value
// as argument and returns a readable stream
// that repeatedly emits that value.
//

import Pipe from "@pipes/core/pipe";

export default function repeat(value) {

  let { readable, writable } = new Pipe( function* () {
    while ( true ) {
      yield value;
    }
  }, { init: value });

  return readable;
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = repeat;



