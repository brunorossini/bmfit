import express from "express";
import cors from "cors";

import "./lib/database";

const app = express();

import routes from "./routes";

app.use(cors());
app.use(express.json());

app.use(routes);

export default app;
