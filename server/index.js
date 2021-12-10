import express from "express";
import { router } from "./routes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
