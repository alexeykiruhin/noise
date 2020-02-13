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

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return Object.assign({}, state, {
                newMessageText: action.text,
            });
        case SEND_MESSAGE:
            const idMsg = state.messages.length;
            const message = state.newMessageText;
            let newMsg = {id: idMsg, message: message};
            let msgs = state.messages;
            msgs.push(newMsg);

            return Object.assign({}, state, {
                newMessageText: '',
                messages: msgs
            });
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