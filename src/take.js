// take :: Int -> { readable, writable }
// take function takes an int n and
// returns a transform stream
// that takes the first n values
// from the input stream.
//

import { ReadableStream, WritableStream } from "@pipes/core/streams";

export default function take(count) {
  let
    // Function that writes chunks to readable
    write,
    writeFn = controller =>
      chunk => (
        count-- > 0 ?
        controller.enqueue( chunk ) :
        controller.close()
      ),

    // Error handler for writable
    error,
    errorFn = controller => e =>
      controller.error( e ),

    // Cleanup fn for writable
    close,
    closeFn = controller => () =>
      controller.close(),

    // Readable
    readable = new ReadableStream({
      start( controller ) {
        // Init pass and err function
        write = writeFn( controller );
        error = errorFn( controller );
        close = closeFn( controller );
      }
    }),

    // Writable
    writable = new WritableStream({
      write,
      close,
      error
    });

  return {
    readable,
    writable
  };
}

// Browserify compat
if ( typeof module !== "undefined" )
  module.exports = take;

