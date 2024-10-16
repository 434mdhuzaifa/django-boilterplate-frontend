import { create } from "zustand";

export const useUserData = create((set) => ({
  user: {},
  setUser: (data) => set(() => ({ user: data })),
}));
