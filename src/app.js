import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware";

import "./lib/database";

const app = express();

import routes from "./routes";

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// app.use(errorMiddleware);

export default app;
