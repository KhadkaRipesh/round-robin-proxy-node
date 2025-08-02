const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Response from server 2");
});

server.listen(3001, () => {
  console.log(`Server2 running on port 3001`);
});
