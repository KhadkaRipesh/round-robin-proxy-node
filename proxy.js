const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});
const servers = ["http://localhost:3000", "http://localhost:3001"];

let i = 0;

// round-robin load balancer
const server = http.createServer((req, res) => {
  const target = servers[i % servers.length];
  console.log(`forwarding to : ${target}`);
  proxy.web(req, res, {
    target,
  });
  i++;
});

server.listen(8000, () => {
  console.log("Reverse Proxy running at http://localhost:8000");
});
