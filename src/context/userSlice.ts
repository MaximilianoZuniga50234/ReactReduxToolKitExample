import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  username: string;
  email: string;
}

const initialState = {
  name: "",
  username: "",
  email: "",
} as User;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
