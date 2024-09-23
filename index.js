const { Worker, isMainThread, workerData } = require("worker_threads");
const os = require("os");
const server = require("./server");

if (isMainThread) {
  // Get the number of CPU cores
  const numCPUs = os.cpus().length;

  console.log(`Starting ${numCPUs} worker threads...`);

  // Dynamically assign ports starting from 3001
  const ports = [];
  for (let i = 0; i < numCPUs; i++) {
    ports.push(3001 + i);
  }

  // Create workers to run servers on the assigned ports
  for (let i = 0; i < ports.length; i++) {
    new Worker(__filename, { workerData: ports[i] });
  }
} else {
  // Worker thread logic: Create the server on the given port
  const PORT = workerData;

  server(PORT);
}
