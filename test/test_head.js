import assert from "assert";
import connect from "@pipes/core/connect";

import head from "../src/head";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("head");

test("check flow", done => {
  let readable, writable, el;

  // Create test streams
  readable = createTestReadable( [1,2,3,4,5,6] );
  writable = createTestWritable( e => { el = e; });

  // End case
  broker.on(writable.signals.close, () => {
    assert(el == 1);
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      head(),
      writable
    );
  });
});


