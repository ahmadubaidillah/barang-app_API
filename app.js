"use strict";

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import config from "./src/config.js";
import route from "./src/routes/v1.js";

// EXPRESS
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.route = route(app);

// SERVER
app.listen(config.port, () => {
  console.info(`Server listening on port ${config.port}`);
});
