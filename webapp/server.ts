const fs = require("fs");
const https = require("https");
const express = require("express");

const PORT = 3001;

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync("pkey.key"),
      cert: fs.readFileSync("cert.crt"),
    },
    app
  )
  .listen(PORT, function () {
    console.log("My HTTPS server listening on port " + PORT + "...");
  });

app.get("/foo", function (req, res) {
  console.log("Hello, I am foo.");
});
