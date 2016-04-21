import "babel-polyfill";
import assert from "assert";
import connect from "@pipes/core/connect";

import scan from "../src/scan";
import {
  createTestWritable,
  createTestReadable,
  broker
} from "./utils";

suite("scan");

let
  subtract = (a,b) => a-b,
  add = (a,b) => a+b;

test("check flow", done => {
  let readable, writable, res;

  // Create test streams
  readable = createTestReadable( [1,2,3] );
  writable = createTestWritable( c => {
    // Check last element is number
    let n = c[c.length-1];
    assert( n === +n );

    res = c;
  });

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    assert( Array.isArray( res ) );

    // Check function
    assert.equal( res[res.length-1], [1,2,3].reduce( add ) );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      scan( add ),
      writable
    );
  });
});


test("check flow with init", done => {
  let readable, writable, res;

  // Create test streams
  readable = createTestReadable( [1,2,3] );
  writable = createTestWritable( c => {
    // Check last element is number
    let n = c[c.length-1];
    assert( n === +n );

    res = c;
  });

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    assert( Array.isArray( res ) );

    // Check function
    assert.equal( res[res.length-1], [1,2,3].reduce( add ) );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      scan( add, 0 ),
      writable
    );
  });
});


test("check argument order", done => {
  let readable, writable, res;

  // Create test streams
  readable = createTestReadable( [1,2,3] );
  writable = createTestWritable( c => {
    // Check last element is number
    let n = c[c.length-1];
    assert( n === +n );

    res = c;
  });

  // End case
  broker.on(writable.signals.close, () => {
    // Make sure result array
    assert( Array.isArray( res ) );

    // Check function
    assert.equal( res[res.length-1], [1,2,3].reduce( subtract ) );

    done();
  });

  // Connect the streams
  assert.doesNotThrow( () => {
    connect(
      readable,
      scan( subtract ),
      writable
    );
  });
});

