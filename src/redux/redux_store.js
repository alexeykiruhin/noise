import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import communicationReducer from "./communictaion_reducer";
import navBarReducer from "./navBar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    communication: communicationReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );



export default store;