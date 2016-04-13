import assert from "assert";
import connect from "@pipes/core/connect";

import drop from "../src/drop";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("drop");

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
      drop(3),
      writable
    );
  });
});

