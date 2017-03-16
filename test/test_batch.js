import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import batch from "../src/batch";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("batch");

let
  input = [1,2,3,4,5],
  expected = [[1,2],[3,4],[5]];

test("check flow", done => {
  let readable, writable, res=[];

  // Create test streams
  readable = createTestReadable( input );
  writable = createTestWritable( c => res.push( c ));

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    assert.deepEqual( res, expected );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      batch( 2 ),
      writable
    );
  });
});
