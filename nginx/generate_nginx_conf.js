const fs = require("fs");
const os = require("os");
const path = require("path");

const numCPUs = os.cpus().length;
const ports = Array.from({ length: numCPUs }, (_, i) => 3001 + i);

// Use __dirname to construct the full path to the template file
const templatePath = path.join(__dirname, "nginx.conf.template");
const template = fs.readFileSync(templatePath, "utf-8");

// Replace the placeholder in the template with the list of ports
const portsString = ports.map((port) => `server app:${port};`).join("\n    ");
const nginxConf = template.replace("{{PORTS}}", portsString);

// Write the final configuration to a new file
fs.writeFileSync(path.join(__dirname, "nginx.conf"), nginxConf);
console.log("Generated nginx.conf based on CPU cores.");
