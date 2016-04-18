import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import intersperse from "../src/intersperse";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("intersperse");

test("check flow", done => {
  let readable, writable,
    res = [];

  // Create test streams
  readable = createTestReadable( [1,2,3] );
  writable = createTestWritable( c => res.push(c) );

  // End case
  broker.on(writable.signals.close, () => {
    assert.deepEqual(res, [1,0,2,0,3]);
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      intersperse(0),
      writable
    );
  });
});

