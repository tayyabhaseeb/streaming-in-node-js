const fs = require("fs");
const http = require("http");

const server = http.createServer();

// ! SOLUTION 1 (PROBLEM IS THE SPEED OF REQUEST IS  MUCH FASTER THAN SPEED OF RESPONSE)
// ? WHICH IS CALLED BACK BONE PAIN

// server.on("request", (req, res) => {
//   const readable = fs.createReadStream("./test-file.txt");
//   readable.on("data", (chunk) => {
//     res.write(chunk.toString());
//   });

//   readable.on("end", () => {
//     res.end();
//   });

//   readable.on("error", (err) => {
//     res.statusCode = 500;
//     res.end("Error in the server");
//   });
// });

// ! SOLUTION 2 (USING PIPE())

server.on("request", (req, res) => {
  const readable = fs.createReadStream("./test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 127.0.0.1:8000");
});
