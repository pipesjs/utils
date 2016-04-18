import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import uniq from "../src/uniq";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("uniq");

test("check flow", done => {
  let readable, writable,
    res = [];

  // Create test streams
  readable = createTestReadable( [1,1,2,2,3,3] );
  writable = createTestWritable( c => res.push(c) );

  // End case
  broker.on(writable.signals.close, () => {
    assert.deepEqual(res, [1,2,3]);
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      uniq(),
      writable
    );
  });
});


