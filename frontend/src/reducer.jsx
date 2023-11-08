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
      const { id, city, picture, username, email, notifications_count } =
        action.payload;
      state.id = id;
      state.city = city;
      state.picture = picture;
      state.username = username;
      state.email = email;
      state.donutsEaten = notifications_count;
    },
    decrementDonutsEaten(state) {
      if (state.donutsEaten > 0) {
        state.donutsEaten -= 1;
      } else {
        state.donutsEaten = 0;
      }
    },
    incrementDonutsEaten(state) {
      state.donutsEaten += 1;
    },
  },
});

export const { setUserData, decrementDonutsEaten, incrementDonutsEaten } =
  userSlice.actions;
export default userSlice.reducer;
