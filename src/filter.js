// filter :: Function -> TransformStream
// filter function takes a string as
// argument and returns a transform stream
// that extracts the passed property from
// incoming values.
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



