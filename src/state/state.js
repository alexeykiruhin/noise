const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_POST = 'ADD_POST';
const SEND_MESSAGE = 'SEND_MESSAGE';


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
        }
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
        switch (action.type) {
            case ADD_POST:
                const id = this._state.profilePage.posts.length;
                const text = this._state.profilePage.value;
                let newPost = {id: id, text: text};
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.value = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.value = action.text;
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.communication.newMessageText = action.text;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                const idMsg = this._state.communication.messages.length;
                const message = this._state.communication.newMessageText;
                let newMsg = {id: idMsg, message: message};
                this._state.communication.messages.push(newMsg);
                this._state.communication.newMessageText = '';
                this._callSubscriber(this._state);
                break;
        }
    },
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
};
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
};


export default store;
window.store = store;