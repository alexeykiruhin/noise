import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import communicationReducer from "./communictaion_reducer";
import navBarReducer from "./navBar_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    communication: communicationReducer,
    navBar: navBarReducer
});

let store = createStore(reducers);
export default store;