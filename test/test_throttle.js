import assert from "assert";
import connect from "@pipes/core/connect";
import Pipe from "@pipes/core/pipe";

import throttle from "../src/throttle";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("throttle");

let
  input = [1,2,3,4,5,6],
  interval = 100,
  delay = chunk => new Promise( resolve => {
    global.setTimeout( () => resolve( chunk ), interval );
  });

test("check flow", done => {
  let readable, writable, res=[];

  // Create test streams
  // skip first element to add to head
  readable = createTestReadable( input.slice(1) );
  writable = createTestWritable( c => res.push( c ));

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    console.log(res);
    assert( res.length <= ( input.length / 2 ) );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      // Add first element to head
      new Pipe.async( delay, { init: input[0] } ),
      throttle( 2 * interval, false ),
      writable
    );
  });
});

