const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});
const servers = ["http://localhost:3000", "http://localhost:3001"];

let serverIndex = 0;

const server = http.createServer((req, res) => {
  const target = servers[serverIndex % servers.length];
  console.log(`forwarding to server: ${target}`);
  proxy.web(req, res, { target });
  serverIndex++;
});

server.listen(8000, () => {
  console.log("Reverse proxy running on port 8000");
});
