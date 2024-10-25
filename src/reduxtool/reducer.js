import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import lemReducer from "./lem/lemSlice";
import stateReducer from "./state/stateSlice";
import appReducer from "./app/appslice";

const reducer = combineReducers({
  Auth: authReducer,
  Lem: lemReducer,
  State: stateReducer,
  App: appReducer,
});

export default reducer;
