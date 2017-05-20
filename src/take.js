// @flow

// take :: Int -> { readable, writable }
// take function takes an int n and
// returns a transform stream
// that takes the first n values
// from the input stream.
//

import type {
  ReadableWritable,
  ReadableStreamController

} from "@pipes/core/streams";

import { ReadableStream, WritableStream } from "@pipes/core/streams";

export default function take( count: number ): ReadableWritable {
  let
    readable: ReadableStream,
    writable: WritableStream,

    // Cleanup fn for writable
    close: ()=>void,
    closeFn = (controller: ReadableStreamController) =>
      () => { !controller._closeRequested && controller.close() },

    // Function that writes chunks to readable
    write: (mixed)=>?mixed,
    writeFn = (controller: ReadableStreamController) =>
      chunk => {
        if ( count-- > 0 ) {
          return controller.enqueue( chunk );
        }

        close();
        writable._writer.close();
      },

    // Error handler for writable
    error: ()=>void,
    errorFn = (controller: ReadableStreamController) =>
      controller.error.bind( controller );

  // Readable
  readable = new ReadableStream({
    start( controller: ReadableStreamController ) {
      // Init pass and err function
      write = writeFn( controller );
      error = errorFn( controller );
      close = closeFn( controller );
    }
  });

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

// FIXME: Internal flow.js resolution problem workaround
export const _take = take;

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = take;
