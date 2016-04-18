import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import pick from "../src/pick";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("pick");

test("check flow", done => {
  let readable, writable,
    o = {
      'a': 1,
      'b': 2
    };

  // Create test streams
  readable = createTestReadable( [o, o, o] );
  writable = createTestWritable( c => assert( c.a ) && assert( !c.b ) );

  // End case
  broker.on(writable.signals.close, () => {
    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      pick('a'),
      writable
    );
  });
});

