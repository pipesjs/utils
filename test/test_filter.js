import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import filter from "../src/filter";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("filter");

test("check flow", done => {
  let readable, writable;

  // Create test streams
  readable = createTestReadable( [1,2,3,4,5,6] );
  writable = createTestWritable( c => assert( c > 3 ) );

  // End case
  broker.on(writable.signals.close, () => {
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      filter( a => a > 3 ),
      writable
    );
  });
});

