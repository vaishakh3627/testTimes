import { combineReducers } from "redux";

const initialState = [];

const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_ARRAY":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  array: arrayReducer,
});

export default rootReducer;