import { create } from "zustand";

export const useEditSchedule = create((set) => ({
  games: [],
  setGames: (games) => set({ games }),
  createGame: async (newGame) => {
    if (
      !newGame.opponent ||
      !newGame.date ||
      newGame.isHomeGame === undefined ||
      !newGame.location ||
      !newGame.logo
    ) {
      console.log(newGame);
      return { success: false, message: "All fields are required" };
    }
    const res = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    });
    const data = await res.json();
    set((state) => ({ games: [...state.games, data.data] }));
    return { success: true, message: "Game added successfully" };
  },
  fetchGames: async () => {
    const res = await fetch("/api/games");
    const data = await res.json();
    set({ games: data.data });
  },
}));
