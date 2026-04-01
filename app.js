const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3001;

let buildVersion = "not-found";
try { buildVersion = fs.readFileSync(".build-version", "utf8").trim(); } catch {}

console.log(`Build-time APP_VERSION (from file): ${buildVersion}`);
console.log(`Runtime PORT=${port}`);
console.log(`Runtime APP_VERSION (env): ${process.env.APP_VERSION || "not set"}`);

app.get("/", (req, res) => {
  return res.type('html').send(`
    <h1>Hello!</h1>
    <p>Build-time APP_VERSION: <strong>${buildVersion}</strong></p>
    <p>Runtime PORT: <strong>${port}</strong></p>
    <p>Runtime APP_VERSION (env): <strong>${process.env.APP_VERSION || "not set"}</strong></p>
  `);
});

const server = app.listen(port, () => console.log(`App listening on port ${port}!`));


server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

