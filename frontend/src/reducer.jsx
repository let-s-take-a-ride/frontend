import { createSlice } from "@reduxjs/toolkit";
import { getUserDataFromLocalStorage } from "./services/localStorageService";

const savedUserData = getUserDataFromLocalStorage();
console.log(savedUserData);

const initialState = savedUserData || {
  id: "",
  city: "",
  picture: "",
  username: "",
  email: "",
  donutsEaten: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      const { id, city, picture, username, email, donutsEaten } =
        action.payload;
      state.id = id;
      state.city = city;
      state.picture = picture;
      state.username = username;
      state.email = email;
      state.donutsEaten = donutsEaten;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
