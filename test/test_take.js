import assert from "assert";
import connect from "@pipes/core/connect";

import take from "../src/take";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("take");

test("check flow", done => {
  let readable, writable,
    count = 0;

  // Create test streams
  readable = createTestReadable( [1,2,3,4,5,6] );
  writable = createTestWritable( () => count++ );

  // End case
  broker.on(writable.signals.close, () => {
    assert(count == 3);
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      take(3),
      writable
    );
  });
});


test("check over flow", done => {
  let readable, writable,
    count = 0;

  // Create test streams
  readable = createTestReadable( [1,2,3,4,5,6] );
  writable = createTestWritable( () => count++ );

  // End case
  broker.on(writable.signals.close, () => {
    assert(count == 6);
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      take(8),
      writable
    );
  });
});
