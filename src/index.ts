import { saySomething } from "./utils";
import express from "express"

const PORT = 3123;

const main = () => {
  const app = express();
  app.get('/', (_req, res) => {
    res.send(saySomething());
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};
main();
