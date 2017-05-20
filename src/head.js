// @flow

// head :: TransformStream
// head function returns a transform stream
// that takes the first value from the input stream
// and enqueues it on the output stream.
//

import type { ReadableWritable } from "@pipes/core/streams";

import { _take as take } from "./take";

export default function head(): ReadableWritable {
  console.log(take);
  return take(1);
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = head;
