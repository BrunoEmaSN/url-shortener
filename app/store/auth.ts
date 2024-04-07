import { StateCreator } from "zustand";
import { User, UserRegister } from "../models/user";
import { loginUser, registerUser } from "../services/authService";

export interface AuthSlice {
  user: User;
  register: (newUser: UserRegister) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: {} as User,
  register: async (newUser) => {
    const result = await registerUser(newUser);

    if (result) {
      set((state) => ({
        ...state,
        user: result,
      }));

      return true;
    }

    return false;
  },
  login: async (email, password) => {
    const result = await loginUser(email, password);

    if (result) {
      set((state) => ({
        ...state,
        user: result,
      }));

      return true;
    }

    return false;
  },
});
