import "babel-polyfill";

import assert from "assert";
import connect from "@pipes/core/connect";
import Pipe from "@pipes/core/pipe";

import debounce from "../src/debounce";
import repeat from "../src/repeat";
import take from "../src/take";

import {
  createTestWritable,
  broker
} from "./utils";

suite("debounce");

let
  [ min, max ] = [ 50, 100 ],
  factor = Math.ceil( (max + min ) / 2 ),
  genRand = ( min, max ) => Math.random() * ( max - min ) + min,
  randDelay = (min, max) => chunk => new Promise( resolve => {
    global.setTimeout( () => resolve( Date.now() ), genRand( min, max ) );
  });

test("check flow", done => {
  let
    readable = repeat( true ),
    writable, res=[];

  // Create test streams
  writable = createTestWritable( c => res.push( c ));

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    assert( res.map( (t, i) => {
        if (i+1 < res.length) {
          return res[i+1] - t;
        }

        return factor;
      })
        .map( a => a >= factor )
        .reduce( (a, b) => a && b, true )
    );

      done();
    });

  // Connect the streams
  connect(
    readable,
    new Pipe.async( randDelay( min, max ) ),
    debounce( factor, false ),
    take( 3 ),
    writable
  );
});
