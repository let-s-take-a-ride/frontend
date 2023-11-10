const USER_DATA_KEY = "user";

export const saveUserDataToLocalStorage = (userData, excludeKey) => {
  const { [excludeKey]: excluded, ...userDataToSave } = userData;
  localStorage.setItem("user", JSON.stringify(userDataToSave));
};

export const getUserDataFromLocalStorage = () => {
  const serializedData = localStorage.getItem(USER_DATA_KEY);
  return serializedData ? JSON.parse(serializedData) : null;
};

export const clearUserDataFromLocalStorage = () => {
  // console.log("Clearing user data from localStorage");
  localStorage.removeItem("user");
};
