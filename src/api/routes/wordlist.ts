import { Router } from "express";
import { getWord } from "../controllers/wordlist";

const wordRouter = Router();

wordRouter.get("/", getWord);

export default wordRouter;
