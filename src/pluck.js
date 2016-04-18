// pluck :: String -> TransformStream
// pluck function takes a string as
// argument and returns a transform stream
// that extracts the passed property from
// incoming values.
//

import Pipe from "@pipes/core/pipe";

export default function pluck(prop) {

  return new Pipe( chunk => {

    let el = chunk[prop];

    if ( el !== void 0 )
      return el;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = pluck;


