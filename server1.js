const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Response from server 1");
});

server.listen(3000, () => {
  console.log(`Server1 running on port 3000`);
});
