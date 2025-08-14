import express from "express";
import {
  createGame,
  deleteGame,
  getGames,
  updateGame,
} from "../controllers/game.controller.js";

const router = express.Router();

router.get("/", getGames);

router.post("/", createGame);

router.put("/:id", updateGame);

router.delete("/:id", deleteGame);

export default router;
