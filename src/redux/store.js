import profileReducer from "./profile_reducer";
import communicationReducer from "./communictaion_reducer";
import navBarReducer from "./navBar_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, text: 'Hi man, dropped liked a? ;)'},
                {id: 1, text: 'Waaasaap man'},
                {id: 2, text: 'Holla boyyyys!'},
                {id: 3, text: 'Tralala humans;)'},
                {id: 4, text: 'Ko ko djambo dudes?'}
            ] ,
            value: ''
        },
        communication: {
            names: [
                {id: 0, name: 'Alex'},
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Jordan'},
                {id: 3, name: 'Beavis'},
                {id: 4, name: 'Butthead'},
                {id: 5, name: 'Mike'},
            ],
            messages: [
                {id: 0, message: 'Hi man, dropped liked a? ;)'},
                {id: 1, message: 'Waaasaap man'},
                {id: 2, message: 'Holla boyyyys!'},
                {id: 3, message: 'Tralala humans;)'},
                {id: 4, message: 'Ko ko djambo dudes?'},
            ],
            newMessageText: ''
        },
        navBar: {}
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer - наблюдатель
    },

    dispatch(action) {// { type: 'ADD_POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.communication = communicationReducer(this._state.communication, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;