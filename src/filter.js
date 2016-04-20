// filter :: Function -> TransformStream
// filter function takes a predicate function
// as argument and returns a transform stream
// that only emits values that satisfy the predicate.
//

import Pipe from "@pipes/core/pipe";

export default function filter(pred) {

  return new Pipe( chunk => {

    if ( chunk !== void 0 && pred( chunk ) )
      return chunk;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = filter;



