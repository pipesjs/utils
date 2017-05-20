import Pipes from "@pipes/core";

import batch from "./batch";
import compact from "./compact";
import cycle from "./cycle";
import debounce from "./debounce";
import drop from "./drop";
import filter from "./filter";
import head from "./head";
import intersperse from "./intersperse";
import last from "./last";
import pick from "./pick";
import pluck from "./pluck";
import repeat from "./repeat";
import scan from "./scan";
import slice from "./slice";
import take from "./take";
import tap from "./tap";
import throttle from "./throttle";
import uniq from "./uniq";

// Exports
export {
  batch,
  compact,
  cycle,
  debounce,
  drop,
  filter,
  head,
  intersperse,
  last,
  pick,
  pluck,
  repeat,
  scan,
  slice,
  take,
  tap,
  throttle,
  uniq
};

// Default exports
const fns = {
  batch,
  compact,
  cycle,
  debounce,
  drop,
  filter,
  head,
  intersperse,
  last,
  pick,
  pluck,
  repeat,
  scan,
  slice,
  take,
  tap,
  throttle,
  uniq
};

// Export to window
if ( typeof window !== "undefined")
  window.Pipes = window.Pipes || Pipes;
  Object.assign( window.Pipes, {
    utils: fns
  });

export default fns;
