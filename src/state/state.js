let state = {
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
};
let reRender = () => {
    console.log('State was changed')
};

window.state = state;

export const addPost = () => {
    const id = state.profilePage.posts.length;
    const text = state.profilePage.value;
    let newPost = {id, text};
    state.profilePage.posts.push(newPost);
    state.profilePage.value = '';
    reRender(state);
};

export const changeNewPostText = (text) => {
    console.log('text' + text);
    state.profilePage.value = text;
    reRender(state);
};

export const subscribe = (observer) => {
    reRender = observer; //observer - наблюдатель
};

export default state;