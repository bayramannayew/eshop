import { create } from "zustand";

const useUserStore = create((set) => ({
  isAuth: false,
  user: null,
  user1: null,
  email: null,
  setEmail: (email) => set({ email }),
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },

  setIsAuth: (bool) => set({ isAuth: bool }),
  setUser: (user) => set({ user }),
  
}));

export default useUserStore;
