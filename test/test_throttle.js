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
  delay = interval => chunk => new Promise( resolve => {
    global.setTimeout( () => resolve( chunk ), interval );
  });

function tester( factor, done ) {
  let readable, writable, res=[];

  // Create test streams
  // skip first element to add to head
  readable = createTestReadable( input.slice(1) );
  writable = createTestWritable( c => res.push( c ));

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    assert( res.length <= ( input.length / factor ) );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,

      // Add first element to head
      new Pipe.async( delay( interval ), { init: input[0] } ),

      throttle( factor * interval, false ),
      writable
    );
  });
}

test("check flow", done => {
  let
    [[d1, p1], [d2, p2], [d3, p3]] = (function* () {
      while( true ) {
        let d, p;

        p = new Promise( r => { d=r; });

        yield [ d, p ];
      }
    })();

  tester( 1, d1 );
  tester( 2, d2 );
  tester( 3, d3 );

  Promise.all([ p1, p2, p3 ]).then( () => done() );
});
