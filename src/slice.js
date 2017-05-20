// @flow

// slice :: Int -> Int -> TransformStream
// slice function takes an int m and an int n,
// returns a transform stream
// that drops the first m values and
// takes the next m-n values
// from the input stream.
//

import type { ReadableWritable } from "@pipes/core/streams";

import chain from "@pipes/core/chain";

import { _drop as drop } from "./drop";
import { _take as take } from "./take";

export default function slice(beg: number, end: number): ReadableWritable {

  return chain(
    drop( beg ),
    take( end - beg )
  );

}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = slice;
