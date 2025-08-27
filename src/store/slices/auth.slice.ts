import { UserData } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: UserData;
}

const initialState: AuthState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    isLogged: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
    },
    logout: (state) => {
      state.user = { ...state.user, isLogged: false };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    updateUser: (state, action: PayloadAction<Partial<UserData>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
