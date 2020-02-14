const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const communicationReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messages: [ ...state.messages ]
    };

    switch (action.type) {
        case SEND_MESSAGE:
            const newMsg = {id: state.messages.length, message: state.newMessageText};
            stateCopy.messages.push(newMsg);
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.text;
            return stateCopy;
        default:
            return state;
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
export default communicationReducer;