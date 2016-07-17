import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import repeat from "../src/repeat";
import take from "../src/take";

import {
  createTestWritable,
  broker
} from "./utils";

suite("repeat");

test("check flow", done => {
  let readable, writable, val=1, len=6, sum=0;

  // Create test streams
  readable = repeat(val);
  writable = createTestWritable( c => { sum+=c });

  // End case
  broker.on(writable.signals.close, () => {
    assert( sum == (val * len) );
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      take( len ),
      writable
    );
  });
});

