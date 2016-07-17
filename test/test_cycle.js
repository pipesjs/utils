import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import cycle from "../src/cycle";
import take from "../src/take";

import {
  createTestWritable,
  broker
} from "./utils";

suite("cycle");

test("check flow", done => {
  let readable, writable, values=[1,2,3], sum=0;

  // Create test streams
  readable = cycle( values );
  writable = createTestWritable( c => { sum+=c });

  // End case
  broker.on(writable.signals.close, () => {
    const expected = 2 * values.reduce( (a, b) => a+b );
    assert( sum == expected );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      take( 2 * values.length ),
      writable
    );
  });
});

