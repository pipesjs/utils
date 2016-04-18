// head :: TransformStream
// head function returns a transform stream
// that takes the first value from the input stream
// and enqueues it on the output stream.
//

import take from "./take";

export default function head() {
  return take(1);
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = head;

