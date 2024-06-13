// Function to remove userData from localStorage
const removeUserDataFromLocalStorage = () => {
    localStorage.removeItem("userData");
  };
  
// Function to check if userData exists in localStorage and return it
const getUserDataFromLocalStorage = () => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
        return JSON.parse(userDataString);
    } else {
        return null;
    }
};
  

export {removeUserDataFromLocalStorage, getUserDataFromLocalStorage}