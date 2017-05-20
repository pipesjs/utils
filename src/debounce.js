// @flow

import type { ReadableWritable } from "@pipes/core/streams";

import pipe from "@pipes/core/pipe";

/**
 * This function takes an int `n` and returns a
 * `transform stream` that debounces the incoming values by `n` ms,
 * only producing values with `n` ms delay between them and dropping the rest.
 */
export default function debounce(
    wait: number=0, head: boolean=true
): ReadableWritable {
    let
      ready: boolean = head,
      last: number = Date.now();

  return new pipe( function debouncer(chunk: mixed): ?mixed {
    let
      now: number = Date.now(),
      test: boolean = ready;

    // Reset
    ready = ( now - last ) >= wait;
    last = now;

    return test ? chunk : void 0;
  });
}

// Browserify compat
if ( typeof module !== "undefined" )
  // $FlowFixMe
  module.exports = debounce;
