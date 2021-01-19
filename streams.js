// const stream = require("stream");
import stream from "stream";

/* 
The stream module is useful for creating new types of stream instances

Typically not necessary to use the stream module when consuming streams!

4 types of streams 
Writable
Readable
Duplex
Transform:Duplex

The docs:
Writable: streams to which data can be written (for example, fs.createWriteStream()).
Readable: streams from which data can be read (for example, fs.createReadStream()).
Duplex: streams that are both Readable and Writable (for example, net.Socket).
Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).
Additionally, this module includes the utility functions stream.pipeline(), stream.finished(), stream.Readable.from() and stream.addAbortSignal().

Streams Promises API#
Added in: v15.0.0
The stream/promises API provides an alternative set of asynchronous utility functions for streams that return Promise objects rather than using callbacks. The API is accessible via require('stream/promises') or require('stream').promises.

streams are considered to operate in "object mode"
doesn't f with null.

Almost all Node.js applications, no matter how simple, use streams in some manner. The following is an example of using streams in a Node.js application that implements an HTTP server:
*/
import { createServer } from "http";

const server = createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a readable stream.
  // `res` is an http.ServerResponse, which is a writable stream.

  let body = "";
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding("utf8");

  // Readable streams emit 'data' events once a listener is added.
  req.on("data", (chunk) => {
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received.
  req.on("end", () => {
    try {
      const data = JSON.parse(body);
      // Write back something interesting to the user:
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);

// each stream is an event emmitter instance
