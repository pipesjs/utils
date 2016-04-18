// slice :: Int -> Int -> TransformStream
// slice function takes an int m and an int n,
// returns a transform stream
// that drops the first m values and
// takes the next m-n values
// from the input stream.
//

import chain from "@pipes/core/chain";

import drop from "./drop";
import take from "./take";

export default function slice(beg, end) {

  return chain(
    drop( beg ),
    take( end - beg )
  );

}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = slice;


