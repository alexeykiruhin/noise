const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

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
                {id: 4, name: 'Butthead'}
            ],
            messages: [
                'Hi man, dropped liked a? ;)',
                'Waaasaap man',
                'Holla boyyyys!',
                'Tralala humans;)',
                'Ko ko djambo dudes?'
            ]
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
            case 'ADD-POST':
                const id = this._state.profilePage.posts.length;
                const text = this._state.profilePage.value;
                let newPost = {id: id, text: text};
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.value = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.value = action.text;
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


export default store;
window.store = store;