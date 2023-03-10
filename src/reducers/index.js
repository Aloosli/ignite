import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducers";

 const rootReducer = combineReducers({
  games: gamesReducer,
});
console.log(rootReducer);

export default rootReducer;
