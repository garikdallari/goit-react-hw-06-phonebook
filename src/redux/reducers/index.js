import { combineReducers } from "redux";

import filterReducer from "./filter";
import contactsReducer from "./contacts";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
