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

    switch (action.type) {
        case ADD_POST:
            const id = state.posts.length;
            const text = state.newPostText;
            let newPost = {id: id, text: text};
            let psts = state.posts;
            psts.push(newPost);

            return Object.assign({}, state, {
                newPostText: '',
                posts: psts
            });
        case UPDATE_NEW_POST_TEXT:
            return Object.assign({}, state, {
                newPostText: action.text,
            });
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