// take :: Int -> { readable, writable }
// take function takes an int n and
// returns a transform stream
// that takes the first n values
// from the input stream.
//

import { ReadableStream, WritableStream } from "@pipes/core/streams";

export default function take( count ) {
  let
    // Cleanup fn for writable
    close,
    closeFn = controller => () =>
      !controller._closeRequested && controller.close(),

    // Function that writes chunks to readable
    write,
    writeFn = controller =>
      chunk => {
        if ( count-- > 0 ) {
          return controller.enqueue( chunk );
        }

        close();
      },

    // Error handler for writable
    error,
    errorFn = controller => controller.error.bind( controller ),

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
