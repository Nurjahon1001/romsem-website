export const INITIAL_STATE = {
   user: {
      email: "",
      username: "",
      password: "",
   }
}

const Storage = (userInformation) => {
   localStorage.setItem(
      "userInformation",
      JSON.stringify(userInformation)
   );
};

export const FormReducer = (state, action) => {
   switch (action.type) {
      case "CHANGE_INPUT":
         const newState = {
            ...state,
            user: action.payload
         }
         Storage(newState);
         return newState
      default:
         return state;
   }
} 