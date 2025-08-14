import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  opponent: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isHomeGame: {
    type: Boolean,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
