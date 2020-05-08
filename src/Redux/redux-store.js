import { createStore, combineReducers } from "redux";
import profileReduce from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
  profilePage: profileReduce,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;
