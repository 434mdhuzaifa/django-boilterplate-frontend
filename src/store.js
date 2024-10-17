import { create } from "zustand";

export const useUserData = create((set) => ({
  user: null,
  setUser: (data) => {
    return set({ user: data });
  },
}));
