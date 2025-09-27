import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    name: null,
    email: null,
    image: null,
    subscriptionStatus: "free",
    isAdmin: false, // ✅ safe default
  },
  setUser: (user) => set({ user }),
  clearUser: () =>
    set({
      user: {
        name: null,
        email: null,
        image: null,
        subscriptionStatus: "free",
        isAdmin: false,
      },
    }),
}));

export default useUserStore;
