const http = require("http");

function wait(ms) {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

function waitAsync(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function server(PORT = 3001) {
  const server = http.createServer(async (req, res) => {
    res.statusCode = 200;

    //await waitAsync(5000); // Simulate a long-running

    res.setHeader("Content-Type", "text/plain");
    res.end(`Response from port ${PORT}`);
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = server;
