// intersperse :: Any -> TransformStream
// intersperse function takes any value a
// and returns a transform stream
// that intersperses the values from
// the input stream with the passed value.
//

import pipe from "@pipes/core/pipe";
import chain from "@pipes/core/chain";

import drop from "./drop";

export default function intersperse(val) {
  return chain(
    new pipe( function* intersperser(chunk) {
      yield val;
      return chunk;
    }),
    drop(1)
  );
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = intersperse;

