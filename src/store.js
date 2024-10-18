import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserData = create(
  persist(
    (set) => ({
      user: null,
      setUser: (data) => {
        return set({ user: data });
      },
    }),
    {
      name: "user",
    }
  )
);

export const access_token = create(
  persist((set) => ({
    token: null,
    setToken: (data) => set({ token: data }),
  }))
);
