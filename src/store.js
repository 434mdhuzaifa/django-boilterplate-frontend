import { create } from "zustand";

export const useUserData = create((set) => ({
  user: null,
  setUser: (data) => set(() => ({ user: data })),
}));


