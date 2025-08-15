import { create } from "zustand";

export const useEditRoster = create((set) => ({
  players: [],
  setPlayers: (players) => set({ players }),
  createPlayer: async (newPlayer) => {
    if (!newPlayer.name || !newPlayer.number || !newPlayer.image) {
      return { success: false, message: "All fields are required" };
    }
    const res = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });
    const data = await res.json();
    set((state) => ({ players: [...state.players, data.data] }));
    return { success: true, message: "Player added successfully" };
  },
  fetchPlayers: async () => {
    const res = await fetch("/api/players");
    const data = await res.json();
    set({ players: data.data });
  },
}));
