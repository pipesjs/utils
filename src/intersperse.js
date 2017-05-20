// @flow

// intersperse :: Any -> TransformStream
// intersperse function takes any value a
// and returns a transform stream
// that intersperses the values from
// the input stream with the passed value.
//

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";
import chain from "@pipes/core/chain";

import { _drop as drop } from "./drop";

export default function intersperse(val: mixed): ReadableWritable {
  return chain(
    new pipe( function* intersperser(chunk: mixed): mixed {
      yield val;
      return chunk;
    }),
    drop(1)
  );
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = intersperse;
