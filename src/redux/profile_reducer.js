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
    newPostText : ''
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        posts: [ ...state.posts ]
    };

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: state.posts.length, text: state.newPostText,};
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.text;
            return stateCopy;
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