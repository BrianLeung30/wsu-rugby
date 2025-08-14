import mongoose from "mongoose";
import Game from "../models/game.model.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json({ success: true, data: games });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log("Error in fetching games:", error.message);
  }
};

export const createGame = async (req, res) => {
  const game = req.body;

  if (
    !game.opponent ||
    !game.date ||
    game.isHomeGame === undefined ||
    !game.location ||
    !game.logo
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  let gameDate = game.date;
  if (typeof gameDate === "object" && gameDate.$date) {
    gameDate = gameDate.$date;
  }

  game.date = new Date(gameDate);

  const newGame = new Game(game);

  try {
    await newGame.save();
    res.status(201).json({ success: true, data: newGame });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log(error);
  }
};

export const updateGame = async (req, res) => {
  const { id } = req.params;
  const game = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid game ID" });
  }

  try {
    const updatedGame = await Game.findByIdAndUpdate(id, game, { new: true });
    res.status(200).json({ success: true, data: updatedGame });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log("Error in updating game:", error.message);
  }
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid game ID" });
  }

  try {
    await Game.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
    console.log("Error in deleting game:", error.message);
  }
};
