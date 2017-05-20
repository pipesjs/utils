// @flow

import type { ReadableStreamController } from "@pipes/core/streams";

import { TransformStream } from "@pipes/core/streams";


/**
 * This function takes an int `n` and returns a transform stream
 * that batches the incoming values in arrays of lengths no
 * more than `n`.
 *
 * @example
 * let
 *   input = [1,2,3,4,5],
 *   expected = [[1,2],[3,4],[5]];
 *
 * let readable, writable, res=[];
 *
 * // Create test streams
 * readable = createTestReadable( input );
 * writable = createTestWritable( c => res.push( c ));
 *
 * // Connect the streams
 * connect(
 *   readable,
 *   batch( 2 ),
 *   writable
 * ); // res == expected
 */
export default function batch(size: number): TransformStream {

  let acc: Array<mixed> = [];

  return new TransformStream({

    transform( chunk: mixed, controller: ReadableStreamController ) {
      // Add chunk to batch
      acc.push( chunk );

      // Check if batch ready
      if ( !( acc.length % size ) ) {

        // Push acc and reset
        controller.enqueue( acc );
        acc = [];
      }
    },

    flush( controller: ReadableStreamController ) {
      // If any unfinished batch remains, enqueue
      if ( acc.length )
        controller.enqueue( acc );

      controller.close();
    }
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = batch;
