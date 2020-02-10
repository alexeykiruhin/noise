const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: [
        {id: 0, text: 'Hi man, dropped liked a? ;)'},
        {id: 1, text: 'Waaasaap man'},
        {id: 2, text: 'Holla boyyyys!'},
        {id: 3, text: 'Tralala humans;)'},
        {id: 4, text: 'Ko ko djambo dudes?'}
    ] ,
    value: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const id = state.posts.length;
            const text = state.value;
            let newPost = {id: id, text: text};
            state.posts.push(newPost);
            state.value = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.value = action.text;
            return state;
        default:
            return state;
    }
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
export default profileReducer;