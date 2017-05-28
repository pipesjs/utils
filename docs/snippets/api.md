The `utils` library only consists of the following functions:

 - [batch](#batch)
 - [compact](#compact)
 - [cycle](#cycle)
 - [debounce](#debounce)
 - [drop](#drop)
 - [filter](#filter)
 - [head](#head)
 - [intersperse](#intersperse)
 - [last](#last)
 - [pick](#pick)
 - [pluck](#pluck)
 - [repeat](#repeat)
 - [scan](#scan)
 - [slice](#slice)
 - [take](#take)
 - [tap](#tap)
 - [throttle](#throttle)
 - [uniq](#uniq)

**Set up code for examples**

```javascript

  // Setup
  let createReadable = data => new ReadableStream({
      start (controller) {
      this.data = data || [1,2,3];

      // Kickstart stream
      controller.enqueue( this.data.pop() );
      },
      pull (controller) {
      if ( !this.data.length )
          return controller.close()

      controller.enqueue( this.data.pop() );
      }
  }),
  createWritable = () => new WritableStream({
      write (chunk) {
      console.log( chunk );
      }
  });
```
