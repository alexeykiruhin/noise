import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import communicationReducer from "./communictaion_reducer";
import navBarReducer from "./navBar_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    communication: communicationReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;