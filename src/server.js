require("dotenv").config();

import app from "./app";
import chalk from "chalk";

const port = process.env.PORT;

app.listen(port, () => {
  console.log(chalk.cyan(`App listening at http://localhost:${port}`));
});
