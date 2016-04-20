import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import tap from "../src/tap";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("tap");

test("check flow", done => {
  let readable, writable;

  // Create test streams
  readable = createTestReadable( [1,2,3] );
  writable = createTestWritable( c => assert( !Number.isNaN( c*1 ) ) );

  // End case
  broker.on(writable.signals.close, () => {
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      tap( console.log.bind(console) ),
      writable
    );
  });
});


