import assert from "assert";
import connect from "@pipes/core/connect";

import compact from "../src/compact";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("compact");

test("check flow", done => {
  let readable, writable,
    count = 0;

  // Create test streams
  readable = createTestReadable( [true, false, 0, "", "hello", 1] );
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
      compact(),
      writable
    );
  });
});

