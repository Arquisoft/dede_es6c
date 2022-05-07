import express, { Application, RequestHandler } from "express";
import cors from "cors";
import bp from "body-parser";
import promBundle from "express-prom-bundle";
import api from "./api";
const fs = require("fs");
const https = require("https");

const app: Application = express();
const port: number = 5000;

const metricsMiddleware: RequestHandler = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

app.use(cors()); // NOSONAR
app.use(bp.json());

app.use("/", api);

https
  .createServer(
    {
      key: fs.readFileSync("pkey.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, function () {
    console.log("My HTTPS server listening on port " + port + "...");
  });
