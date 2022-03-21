import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import wordRouter from "./api/routes/wordlist";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Api Up and running" });
});

app.use("/getword", wordRouter);

app.listen(PORT, () =>
  console.log(`Server up and running - http://localhost:${PORT}`)
);
