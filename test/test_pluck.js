import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import pluck from "../src/pluck";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("pluck");

test("check flow", done => {
  let readable, writable,
    o = {
      'a': 1,
      'b': 2
    };

  // Create test streams
  readable = createTestReadable( [o, o, o] );
  writable = createTestWritable( c => assert( c == 1 ) );

  // End case
  broker.on(writable.signals.close, () => {
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      pluck('a'),
      writable
    );
  });
});


